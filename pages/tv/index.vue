<template>
	<article
		class="grid grid-cols-[repeat(auto-fit,_minmax(375px,_1fr))] border-inherit"
		v-if="!pending"
	>
		<div class="flex flex-col h-fit divide-y border-color_primary lg:border-r-[1px]">
			<img
				class="h-full max-h-[500px] aspect-video w-full object-cover object-top xl:hidden"
				:src="`https://image.tmdb.org/t/p/original${data?.backdrop_path}`"
				:alt="showTitle"
			>
			<h1 class="font-semibold text-3xl leading-none m-0 z-10 p-5 relative bg-color_primary border-inherit">
				{{ showTitle }} {{ showAirDate }}
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
	<div
		v-else
		class="h-screen grid place-items-center"
	>
		<AtomsLoadSpin :size="'large'" />
	</div>
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

const { data, pending } = await useFetch('/api/TMDBTvId', {
	params: movieParams
})

const showTitle = computed(() => {
	return data.value?.name ? data.value.name : data.value?.original_name ? data.value?.original_name : 'Show title not found [404]'
})

const months: { [key: number]: string } = {
	1: "Jan",
	2: "Feb",
	3: "Mar",
	4: "Apr",
	5: "May",
	6: "Jun",
	7: "Jul",
	8: "Aug",
	9: "Sep",
	10: "Oct",
	11: "Nov",
	12: "Dec"
}

const showAirDate = computed(() => {
	if (data.value?.first_air_date !== undefined && data.value.last_air_date !== undefined) {
		let firstYear
		let lastYear
		if (data.value.first_air_date !== null) {
			firstYear = data.value.first_air_date.split("-")[0]
		} else {
			firstYear = "N/A"
		}
		if (data.value.last_air_date !== null) {
			lastYear = data.value.last_air_date.split("-")[0]
		} else {
			lastYear = firstYear
		}
		let formatedDate = data.value.first_air_date.split("-")
		let day = formatedDate[2]
		let month = months[Number(formatedDate[1])]
		if (firstYear === lastYear) {
			return `| ${day} ${month} ${firstYear}`
		} else {
			return `| ${day} ${month} ${firstYear}/${lastYear}`
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

const genres = computed(() => {
	let arrGenres: Array<string> = [];
	data.value?.genres.forEach(genre => {
		arrGenres.push(genre.name)
	});
	return arrGenres
})

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

const cast = computed(() => {
	let arrCast: Array<People> = [];
	data.value?.credits.cast.forEach(actor => {
		arrCast.push({
			name: actor.name,
			role: actor.character,
			picture: actor.profile_path,
			popularity: actor.popularity
		})
	});
	return arrCast
})

const crew = computed(() => {
	let arrCrew: Array<People> = [];
	data.value?.credits.crew.forEach(people => {
		arrCrew.push({
			name: people.name,
			role: people.job,
			picture: people.profile_path,
			popularity: people.popularity
		})
	});
	return arrCrew
})


const videoUrls = computed(() => {
	let arrVideoUrls: Array<{
		name: string;
		key: string;
		id: string;
	}> = [];
	let countTrailers = 0;
	let countClips = 0;
	let countTeasers = 0;
	if (data.value?.videos.results !== undefined) {
		for (const video of data.value?.videos.results) {
			if (video.iso_3166_1 === projectStore.region) {
				if (video.type === "Trailer") {
					countTrailers++;
					arrVideoUrls.push({
						name: video.name,
						key: video.key,
						id: video.id
					});
				} else if (video.type === "Clip") {
					countClips++;
					arrVideoUrls.push({
						name: video.name,
						key: video.key,
						id: video.id
					})
				} else if (video.type === "Teaser") {
					countTeasers++;
					arrVideoUrls.push({
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
						arrVideoUrls.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Clip" && countClips < 1) {
						countClips++;
						arrVideoUrls.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Teaser" && countTeasers < 1) {
						countTeasers++;
						arrVideoUrls.push({
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
					if (video.type === "Trailer" && (countTrailers + countClips + countTeasers) < 4 && !arrVideoUrls.some(obj => obj.id === video.id)) {
						countTrailers++;
						arrVideoUrls.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Clip" && (countTrailers + countClips + countTeasers) < 4 && !arrVideoUrls.some(obj => obj.id === video.id)) {
						countClips++;
						arrVideoUrls.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					} else if (video.type === "Teaser" && (countTrailers + countClips + countTeasers) < 4 && !arrVideoUrls.some(obj => obj.id === video.id)) {
						countTeasers++;
						arrVideoUrls.push({
							name: video.name,
							key: video.key,
							id: video.id
						})
					}
				};
			}
		}
	}

	return arrVideoUrls
})


const ads = ref<Array<WatchProvidersRegionContent> | undefined>()
const flatrate = ref<Array<WatchProvidersRegionContent> | undefined>()
const buy = ref<Array<WatchProvidersRegionContent> | undefined>()
const rent = ref<Array<WatchProvidersRegionContent> | undefined>()

watch(() => data.value, () => {
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
})

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
			return arr[0];
		} else if (arr.length === 2) {
			return arr.join(' or ');
		} else {
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
		return ` ${showTitle.value}, is not avaiable to watch in ${projectStore.region}. JustWatch helps you discover where you can legally watch your movies and TV shows online. For more information, visit `
	} else {
		return ` ${showTitle.value}, is currently available to watch with ${customJoin(all)} in ${projectStore.region}. JustWatch helps you discover where you can legally watch your movies and TV shows online. For more information, visit `
	}
}) 
</script>  