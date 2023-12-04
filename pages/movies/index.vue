<template>
	<article class="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] border-inherit">
		<div class="flex flex-col h-fit divide-y border-color_primary lg:border-r-[1px]">
			<img
				class="h-full max-h-[500px] aspect-video w-full object-cover object-top xl:hidden"
				:src="`https://image.tmdb.org/t/p/original${data?.backdrop_path}`"
				:alt="showTitle"
			>
			<h1 class="font-semibold text-3xl leading-none m-0 z-10 p-5 relative bg-color_primary border-inherit">
				{{ showTitle }} ({{ data?.release_date !== undefined ? data?.release_date.split("-")[0] : ""}})
			</h1>
			<div class="border-inherit grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
				<img
					class="object-contain hidden xl:block"
					:src="`https://image.tmdb.org/t/p/original${data?.poster_path}`"
					:alt="`Poster ${showTitle}`"
				>
				<div class="outline outline-1 outline-color_primary">
					<OrganismsProvidersTable
						:ads="ads"
						:flatrate="flatrate"
						:rent="rent"
						:buy="buy"
					/>
					<p class="py-5 px-5 xl:pl-5 text-justify text-sm">
						{{ justwatchAdText }} <a
							href="https://www.justwatch.com/us/JustWatch-Streaming-API"
							target="_blank"
							class="underline underline-offset-2 text-color_primary hover:font-semibold"
						>JustWatch.com</a>.
					</p>
				</div>
			</div>
			<div class="divide-y border-inherit">
				<AtomsInformationParagraph
					class="px-5"
					title="Sinopse"
					:paragraph="data?.overview ? data?.overview : 'N/A'"
				/>
				<AtomsInformationParagraph
					class="px-5"
					title="Rating"
					:paragraph="rating"
				/>
				<AtomsInformationParagraph
					class="px-5"
					title="Genres"
					:paragraph="genres.join(', ')"
				/>
				<AtomsInformationParagraph
					class="px-5"
					title="Runtime"
					:paragraph="runtime"
				/>
				<AtomsInformationParagraph
					class="px-5"
					title="Age Group"
					:paragraph="certification()"
				/>
				<AtomsInformationParagraph
					class="px-5"
					title="Original Language"
					:paragraph="data?.original_language ? data?.original_language.toUpperCase() : ''"
				/>
			</div>
		</div>
		<div class="flex flex-col divide-y border border-transparent gap-5">
			<div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-2">
				<AtomsYouTubeIframe
					class="md:pl-5 "
					v-for="video in videoUrls"
					:key="video.id"
					:title="video.name"
					:video-key="video.key"
					:video-id="video.id"
				/>
			</div>
			<OrganismsMoviePeopleInfos
				class="py-2 px-5 md:px-0 md:pl-5"
				title="Cast"
				:people="cast"
			/>
			<OrganismsMoviePeopleInfos
				class="py-2 px-5 md:px-0 md:pl-5"
				title="Crew"
				:people="crew.sort((a, b) => b.popularity - a.popularity)"
			/>
		</div>
	</article>
</template>
  
<script setup lang="ts">
definePageMeta({
	layout: 'show-page'
})

const route = useRoute();

const projectStore = useProjectStore();

const movieParams = computed(() => {
	return {
		"language": projectStore.language,
		"id": route.query.id, /* 622 */
	};
});

const { data } = await useFetch('/api/TMDBMovieId', {
	params: movieParams
})

const showTitle = data.value?.title ? data.value.title : data.value?.original_title ? data.value?.original_title : 'Show title not found [404]'


const reduceVoteCount = (toReduce: number) => {
	let num = toReduce
	let reduced = ''
	let count = 0
	if (num > 1000) {
		do {
			num = num / 1000
			count++
		} while (num > 1000);
	}
	switch (true) {
		case count === 1:
			reduced = num.toFixed(1) + 'k'
			break;
		case count === 2:
			reduced = num.toFixed(1) + 'M'
			break;
		case count === 3:
			reduced = num.toFixed(1) + 'G'
			break;
		case count >= 4:
			reduced = num.toFixed(1) + 'T'
			break;
		default:
			reduced = num.toString();
			break;
	}
	return reduced
}
const rating = computed(() => {
	if (data.value?.vote_average) {
		if (data.value?.vote_count) {
			return `${data.value.vote_average.toFixed(1)} (${reduceVoteCount(data.value.vote_count)})`
		} else {
			return `${data.value.vote_average.toFixed(1)}`
		}
	} else {
		return 'Unrated'
	}
})

const reduceRuntime = (toReduce: number) => {
	let num = toReduce
	let reduced = ''
	let count = 0
	if (num > 60) {
		do {
			num = num / 60
			count++
		} while (num > 60);
	}
	switch (true) {
		case count === 1:
			let hour = Number(num.toFixed(0))
			let min = Math.ceil(((Number((num.toFixed(2).toString().split('.')[1])) * 60) / 100))

			reduced = `${hour}h ${min}m`
			break;
		default:
			reduced = num.toString() + 'm';
			break;
	}
	return reduced
}
const runtime = computed(() => {
	if (data.value?.runtime) {
		return reduceRuntime(data.value.runtime)
	} else {
		return ''
	}
})

const genres = ref<Array<string>>([])
data.value?.genres.forEach(genre => {
	genres.value.push(genre.name)
});



const certification = () => {
	let regionExist = false
	let regionDefaultExist = false
	let certification = ""

	data.value?.release_dates.results.forEach(release => {
		if (release.iso_3166_1 === projectStore.region) {
			release.release_dates.forEach(release => {
				if (release.certification.length > 0) {
					regionExist = true
					certification = release.certification
				}
			});
		}
	});
	if (!regionExist) {
		data.value?.release_dates.results.forEach(release => {
			if (release.iso_3166_1 === 'US') {
				release.release_dates.forEach(release => {
					if (release.certification.length > 0) {
						regionDefaultExist = true
						certification = release.certification + ' (US)'
					}
				});
			}
		})
	}
	if (!regionDefaultExist && !regionExist) {
		data.value?.release_dates.results.forEach(results => {
			results.release_dates.forEach(release => {
				if (release.certification.length > 0) {
					certification = release.certification + ` (${results.iso_3166_1})`
				}
			});
		})
	}
	if (certification.length === 0) {
		certification = "N/A"
	}
	return certification
}

const cast = ref<Array<People>>([]);
data.value?.credits.cast.forEach(actor => {
	cast.value.push({
		name: actor.name,
		role: actor.character,
		picture: actor.profile_path,
		popularity: actor.popularity
	})
});

const crew = ref<Array<People>>([]);
data.value?.credits.crew.forEach(people => {
	crew.value.push({
		name: people.name,
		role: people.job,
		picture: people.profile_path,
		popularity: people.popularity
	})
});

const videoUrls = ref<Array<{
	name: string;
	key: string;
	id: string;
}>>([]);

onMounted(() => {
	let countVideos = 0
	data.value?.videos.results.forEach(video => {
		if (video.type === "Trailer" && countVideos <= 3) {
			videoUrls.value.push({
				name: video.name,
				key: video.key,
				id: video.id
			})
			countVideos++
		}

		if (video.type === "Clip" && countVideos <= 3) {
			videoUrls.value.push({
				name: video.name,
				key: video.key,
				id: video.id
			})
			countVideos++
		}
	});
})

const ads = ref<Array<WatchProvidersRegionContent> | undefined>()
const flatrate = ref<Array<WatchProvidersRegionContent> | undefined>()
const buy = ref<Array<WatchProvidersRegionContent> | undefined>()
const rent = ref<Array<WatchProvidersRegionContent> | undefined>()

const providerResults: WatchProvidersResults | undefined = data.value?.['watch/providers'].results

for (const key in providerResults) {
	if (Object.prototype.hasOwnProperty.call(providerResults, key)) {
		const element = providerResults[key];
		if (key === projectStore.region) {
			ads.value = element?.ads
			flatrate.value = element?.flatrate
			buy.value = element?.buy
			rent.value = element?.rent
		}
	}
}

const justwatchAdText = computed(() => {
	let all: Array<string> = [];
	if (ads.value !== undefined) {
		let adsText = 'ads';
		all.push(adsText);
	}
	if (flatrate.value !== undefined) {
		let flatrateText = 'streaming services'
		all.push(flatrateText);
	}
	if (buy.value !== undefined) {
		let buyText = 'purchase'
		all.push(buyText);
	}
	if (rent.value !== undefined) {
		let rentText = 'rent'
		all.push(rentText);
	}

	function customJoin(arr: Array<string>): string {
		if (arr.length === 1) {
			// Se houver apenas um elemento, retorne esse elemento diretamente
			return arr[0];
		} else if (arr.length === 2) {
			// Se houver apenas dois elementos, use "or" para juntar
			return arr.join(' or ');
		} else {
			// Caso contrário, use o separador padrão (vírgula)
			let final: string = ""
			arr.forEach((element, index) => {
				if (index === (arr.length - 2)) {
					final = final + element + ' or '
				} else if (index === arr.length - 1) {
					final = final + element
				} else {
					final = final + element + ', '
				}
			});
			return final
		}
	}
	if (all.length === 0) {
		return ` ${showTitle}, is not avaiable to watch in ${projectStore.region}. JustWatch helps you discover where you can legally watch your movies and TV shows online. For more information, visit `
	} else {
		return ` ${showTitle}, is currently available to watch with ${customJoin(all)} in ${projectStore.region}. JustWatch helps you discover where you can legally watch your movies and TV shows online. For more information, visit `
	}
})
</script>  