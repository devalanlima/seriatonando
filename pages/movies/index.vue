<template>
	<article
		class="grid grid-cols-[repeat(auto-fit,_minmax(375px,_1fr))] border-inherit"
		v-if="!pending"
	>
		<div class="flex flex-col h-fit divide-y border-color_primary lg:border-r-[1px]">
			<img
				class="h-full max-h-[500px] aspect-video w-full object-cover object-top xl:hidden"
				:src="`https://image.tmdb.org/t/p/w780${data?.backdrop_path}`"
				:alt="showTitle"
			>
			<h1 class="font-semibold text-3xl leading-none m-0 z-10 p-5 relative bg-color_primary border-inherit">
				{{ showTitle }} {{ dataRelease() }}
			</h1>
			<div class="border-inherit grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
				<img
					class="object-contain hidden xl:block"
					:src="`https://image.tmdb.org/t/p/w500${data?.poster_path}`"
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

const { data, pending } = await useFetch('/api/TMDBMovieId', {
	params: movieParams
})

const showTitle = computed(() => {
	return data.value?.title ? data.value.title : data.value?.original_title ? data.value?.original_title : 'Show title not found [404]'
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

const dataRelease = () => {
	if (data.value?.release_date !== undefined && data.value.release_date !== null) {
		let formatedDate = data.value.release_date.split('-')
		let month = months[Number(formatedDate[1])]
		let day = formatedDate[2]
		let year = formatedDate[0]
		return `| ${day} ${month} ${year}`
	}
}


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
	console.log('change');
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