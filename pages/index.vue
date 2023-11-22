<template>
  <article
    :class="'h-screen overflow-y-auto pr-3'"
    ref="containerProps"
  >
    <ul class="p-1 gap-5 grid grid-cols-[repeat(auto-fit,_minmax(375px,_1fr))] justify-items-center min-h-screen">
      <template v-if="isNotLoading">
        <template v-for="show in allShows">
          <li
            class="w-full h-[210px] max-w-fit"
            v-if="tmdbFiltersStore.showType === show.showType || tmdbFiltersStore.showType === 'all'"
          >
            <OrganismsMovieCard
              :show-title="show.title"
              :show-genres="show.genres"
              :show-overview="show.overview"
              :poster-path="(show.posterPath != null ? show.posterPath : 'not found')"
              :show-type="show.showType"
            />
          </li>
        </template>
      </template>
      <template v-if="isLoading">
        <li
          class="w-full"
          v-for="load in 20"
          :key="load"
        >
          <OrganismsMovieCard
            show-title="loading"
            show-genres="loading"
            show-overview="loading"
            poster-path="loading"
            show-type="all"
          />
        </li>
      </template>
    </ul>
  </article>
</template>

<script setup lang="ts">
const projectStore = useProjectStore();
const tmdbFiltersStore = useTMDBFiltersStore();

const containerProps = ref<HTMLElement | null>(null);
const { y: verticalContainerScroll } = useScroll(containerProps);

const movieParams = computed(() => {
  return {
    "language": projectStore.language,
    "certification_country": tmdbFiltersStore.certifications.length > 0 ? projectStore.region : undefined,
    "page": tmdbFiltersStore.moviePage,
    "primary_release_date.gte": tmdbFiltersStore.releaseDateGte,
    "primary_release_date.lte": tmdbFiltersStore.releaseDateLte,
    "sort_by": tmdbFiltersStore.sortBy,
    "vote_average.gte": tmdbFiltersStore.voteAverageGte,
    "vote_average.lte": tmdbFiltersStore.voteAverageLte,
    "watch_region": projectStore.region,
    "vote_count.gte": tmdbFiltersStore.minVoteCount,
    "with_watch_providers": tmdbFiltersStore.providers.length > 0 ? tmdbFiltersStore.providers.join('|') : undefined,
    "with_genres": tmdbFiltersStore.movieGenres.length > 0 ? tmdbFiltersStore.movieGenres.join('|') : undefined,
    "certification": tmdbFiltersStore.certifications.length > 0 ? tmdbFiltersStore.certifications.join('|') : undefined,
  };
});

const tvParams = computed(() => {
  return {
    "language": projectStore.language,
    "page": tmdbFiltersStore.tvPage,
    "air_date.gte": tmdbFiltersStore.releaseDateGte,
    "air_date.lte": tmdbFiltersStore.releaseDateLte,
    "sort_by": tmdbFiltersStore.sortBy,
    "vote_average.gte": tmdbFiltersStore.voteAverageGte,
    "vote_average.lte": tmdbFiltersStore.voteAverageLte,
    "watch_region": projectStore.region,
    "vote_count.gte": tmdbFiltersStore.minVoteCount,
    "with_watch_providers": tmdbFiltersStore.providers.length > 0 ? tmdbFiltersStore.providers.join('|') : undefined,
    "with_genres": tmdbFiltersStore.tvGenres.length > 0 ? tmdbFiltersStore.tvGenres.join('|') : undefined,
  };
});

const { data: movieShow } = await UseCallCustomApiResponse('/api/TMDBDiscoverMovie', movieParams.value);
const { data: tvShow } = await UseCallCustomApiResponse('/api/TMDBDiscoverTv', tvParams.value);

const allShows = ref([...movieShow.value?.results || [], ...tvShow.value?.results || []].sort((a, b) => b.popularity - a.popularity))

const lastMoviePage = ref(tmdbFiltersStore.moviePage);
const lastTvPage = ref(tmdbFiltersStore.tvPage);
const totalMoviePages = ref(movieShow.value?.totalPages);
const totalTvPages = ref(tvShow.value?.totalPages);
const pending = ref(false);

let timeoutId: ReturnType<typeof setTimeout>;
const canCallNewPage = ref(true);
useInfiniteScroll(
  containerProps,
  () => {
    if (canCallNewPage.value) {
      clearTimeout(timeoutId);
      if (tmdbFiltersStore.showType === 'all') {
        if (totalMoviePages.value !== undefined ? tmdbFiltersStore.moviePage < totalMoviePages.value : false) {
          tmdbFiltersStore.moviePage++;
        }
        if (totalTvPages.value !== undefined ? tmdbFiltersStore.tvPage < totalTvPages.value : false) {
          tmdbFiltersStore.tvPage++;
        }
        if (tmdbFiltersStore.moviePage === totalMoviePages.value && tmdbFiltersStore.tvPage === totalTvPages.value || 0 === totalMoviePages.value && 0 === totalTvPages.value) {
          canCallNewPage.value = false
        }
      } else if (tmdbFiltersStore.showType === 'movies') {
        if (totalMoviePages.value !== undefined ? tmdbFiltersStore.moviePage < totalMoviePages.value : false) {
          tmdbFiltersStore.moviePage++;
        }
        if (tmdbFiltersStore.moviePage === totalMoviePages.value || totalMoviePages.value === 0) {
          canCallNewPage.value = false
        }
      } else if (tmdbFiltersStore.showType === 'tv') {
        if (totalTvPages.value !== undefined ? tmdbFiltersStore.tvPage < totalTvPages.value : false) {
          tmdbFiltersStore.tvPage++;
        }
        if (tmdbFiltersStore.tvPage === totalTvPages.value || totalTvPages.value === 0) {
          canCallNewPage.value = false
        }
      }
    }
  },
  { distance: 1000 }
);

const resetPage = () => {
  verticalContainerScroll.value = 0;
  allShows.value = [];
}

watch(() => tmdbFiltersStore.showType, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    tmdbFiltersStore.moviePage = 1;
    tmdbFiltersStore.tvPage = 1;
    clearTimeout(timeoutId);
    resetPage();
  }
})

tmdbFiltersStore.$subscribe(async (mutation, state) => {
  canCallNewPage.value = false;
  console.log('trigger');

  clearTimeout(timeoutId);
  timeoutId = setTimeout(async () => {
    pending.value = true;
    if (state.showType === 'all') {
      if (lastMoviePage.value === state.moviePage || lastTvPage.value === state.tvPage) {
        resetPage();
        if (state.moviePage !== 1 || state.tvPage !== 1) {
          state.moviePage = 1;
          state.tvPage = 1;
        }
      }
      const { data: movieShow } = await UseCallCustomApiResponse('/api/TMDBDiscoverMovie', movieParams.value);
      const { data: tvShow } = await UseCallCustomApiResponse('/api/TMDBDiscoverTv', tvParams.value);
      allShows.value.push(...[...movieShow.value?.results || [], ...tvShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      lastMoviePage.value = state.moviePage;
      lastTvPage.value = state.tvPage;
      totalMoviePages.value = movieShow.value?.totalPages;
      totalTvPages.value = tvShow.value?.totalPages;
      canCallNewPage.value = true;

    } else if (state.showType === 'movies') {
      if (lastMoviePage.value === state.moviePage) {
        resetPage();
        if (state.moviePage !== 1) {
          state.moviePage = 1;
        }
      }
      const { data: movieShow } = await UseCallCustomApiResponse('/api/TMDBDiscoverMovie', movieParams.value);
      allShows.value.push(...[...movieShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      lastMoviePage.value = state.moviePage;
      totalMoviePages.value = movieShow.value?.totalPages;
      canCallNewPage.value = true;

    } else if (state.showType === 'tv') {
      if (lastTvPage.value === state.tvPage) {
        resetPage();
        if (state.tvPage !== 1) {
          state.tvPage = 1;
        }
      }
      const { data: tvShow } = await UseCallCustomApiResponse('/api/TMDBDiscoverTv', tvParams.value);
      allShows.value.push(...[...tvShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      lastTvPage.value = state.tvPage;
      totalTvPages.value = tvShow.value?.totalPages;
      canCallNewPage.value = true;
    }

    pending.value = false;
  }, 500);
});

const isNotLoading = computed(() => {
  switch (tmdbFiltersStore.showType) {
    case 'all':
      if (tmdbFiltersStore.moviePage === 1 && tmdbFiltersStore.tvPage === 1) {
        return !pending.value;
      } else {
        return true;
      }

    case 'movies':
      if (tmdbFiltersStore.moviePage === 1) {
        return !pending.value;
      } else {
        return true;
      }

    case 'tv':
      if (tmdbFiltersStore.tvPage === 1) {
        return !pending.value;
      } else {
        return true;
      }
    default:
      return false;
      break;
  }
})

const isLoading = computed(() => {
  switch (true) {
    case pending.value:
      return true;
    default:
      return false;
      break;
  }
})

</script>
