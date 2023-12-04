<template>
	<article class="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] border-inherit">
		<div class="flex flex-col h-fit divide-y border-color_primary lg:border-r-[1px]">
			<img
				class="h-full max-h-[500px] aspect-video w-full object-cover object-top xl:hidden"
				:src="`https://image.tmdb.org/t/p/original${data?.backdrop_path}`"
				:alt="showTitle"
			>
			<h1 class="font-semibold text-3xl leading-none m-0 z-10 p-5 relative bg-color_primary border-inherit">
				{{ showTitle }} ({{ showAirDate }})
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
					title="Seasons"
					:paragraph="data?.number_of_seasons !== undefined ? `${data?.number_of_seasons}` : 'N/A'"
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
			<div
				class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-2"
				v-if="videoUrls.length > 0"
			>
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
				v-if="cast.length > 0"
				class="py-2 px-5 md:px-0 md:pl-5"
				title="Cast"
				:people="cast"
			/>
			<OrganismsMoviePeopleInfos
				v-if="crew.length > 0"
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

const { data } = await useFetch('/api/TMDBTvId', {
	params: movieParams
})

const showTitle = data.value?.name ? data.value.name : data.value?.original_name ? data.value?.original_name : 'Show title not found [404]'

const showAirDate = computed(()=>{
	if (data.value?.first_air_date !== undefined && data.value.last_air_date !== undefined) {
		let firstYear = data.value.first_air_date.split("-")[0]
		let lastYear = data.value.last_air_date.split("-")[0]
		if (firstYear !== lastYear) {
			return `${firstYear} / ${lastYear}`
		} else {
			return firstYear
		}
	}
})

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


const genres = ref<Array<string>>([])
data.value?.genres.forEach(genre => {
	genres.value.push(genre.name);
});



const certification = () => {
	let regionExist = false
	let regionDefaultExist = false
	let certification = ""

	if (data.value?.content_ratings.results !== undefined) {
		for (const result of data.value?.content_ratings.results) {
			if (result.iso_3166_1 === projectStore.region) {
				certification = result.rating
				regionExist = true
			}
		}
	}

	if (data.value?.content_ratings.results !== undefined && !regionExist) {
		for (const result of data.value?.content_ratings.results) {
			if (result.iso_3166_1 === "US") {
				certification = result.rating + ' (US)'
				regionDefaultExist = true
			}
		}
	}

	if (certification.length === 0) {
		certification = 'N/A'
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
	let countTrailers = 0;
	let countClips = 0;
	let countTeasers = 0;
	if (data.value?.videos.results !== undefined) {
		for (const video of data.value?.videos.results) {
			if (video.iso_3166_1 === projectStore.region) {
				if (video.type === "Trailer") {
					countTrailers++;
					videoUrls.value.push({
						name: video.name,
						key: video.key,
						id: video.id
					});
				} else if (video.type === "Clip") {
					countClips++;
					videoUrls.value.push({
						name: video.name,
						key: video.key,
						id: video.id
					})
				} else if (video.type === "Teaser") {
					countTeasers++;
					videoUrls.value.push({
						name: video.name,
						key: video.key,
						id: video.id
					})
				}
			}
		}

		if (countTrailers < 2 || countClips < 1 || countTeasers < 1) {
			for (const video of data.value?.videos.results) {
				if (video.iso_3166_1 === "US") {
					if (video.type === "Trailer" && countTrailers < 2) {
						countTrailers++;
						videoUrls.value.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Clip" && countClips < 1) {
						countClips++;
						videoUrls.value.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Teaser" && countTeasers < 1) {
						countTeasers++;
						videoUrls.value.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					}
				}
			}
		}

		if ((countTrailers + countClips + countTeasers) < 4) {
			for (const video of data.value?.videos.results) {
				if (video.iso_3166_1 === "US") {
					if (video.type === "Trailer" && (countTrailers + countClips + countTeasers) < 4 && !videoUrls.value.some(obj => obj.id === video.id)) {
						countTrailers++;
						videoUrls.value.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Clip" && (countTrailers + countClips + countTeasers) < 4 && !videoUrls.value.some(obj => obj.id === video.id)) {
						countClips++;
						videoUrls.value.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Teaser" && (countTrailers + countClips + countTeasers) < 4 && !videoUrls.value.some(obj => obj.id === video.id)) {
						countTeasers++;
						videoUrls.value.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					}
				};
			}
		}
	}
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