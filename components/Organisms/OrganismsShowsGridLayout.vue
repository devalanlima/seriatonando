<template>
  <article class="relative mb-10">
    <ul class="p-1 gap-5 grid grid-cols-[repeat(auto-fill,_minmax(375px,_1fr))] justify-items-center">
      <template v-if="isNotLoading">
        <template v-for="show in allShows">
          <li class="w-full h-[210px]" v-if="tmdbFiltersStore.showType === show.showType || tmdbFiltersStore.showType === 'all'">
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
    <div
      class="h-[800px] -bottom-14 w-full flex justify-center items-end absolute pointer-events-none"
      ref="loadingSpin"
    >
      <AtomsLoadSpin
        v-if="isSpinLoading"
        size="medium"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  urlApiMovie: string;
  urlApiTv: string;
  movieParams: object;
  tvParams: object;
}

const props = defineProps<Props>()
const tmdbFiltersStore = useTMDBFiltersStore();

const { data: movieShow } = await UseCallCustomApiResponse(props.urlApiMovie, props.movieParams);
const { data: tvShow } = await UseCallCustomApiResponse(props.urlApiTv, props.tvParams);

const allShows = ref([...movieShow.value?.results || [], ...tvShow.value?.results || []].sort((a, b) => b.popularity - a.popularity))

const lastMoviePage = ref(tmdbFiltersStore.moviePage);
const lastTvPage = ref(tmdbFiltersStore.tvPage);
const totalMoviePages = ref(movieShow.value?.totalPages);
const totalTvPages = ref(tvShow.value?.totalPages);
const pending = ref(false);

let timeoutApiCall: ReturnType<typeof setTimeout>;
const canCallNewPage = ref(true);

watch(() => tmdbFiltersStore.showType, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    tmdbFiltersStore.moviePage = 1;
    tmdbFiltersStore.tvPage = 1;
    clearTimeout(timeoutApiCall);
    allShows.value = [];
  }
})

tmdbFiltersStore.$subscribe(async (mutation, state) => {
  canCallNewPage.value = false;

  clearTimeout(timeoutApiCall);
  timeoutApiCall = setTimeout(async () => {
    pending.value = true;
    if (state.showType === 'all') {
      if (lastMoviePage.value === state.moviePage || lastTvPage.value === state.tvPage && totalMoviePages.value !== 0 && totalTvPages.value !== 0 && state.moviePage !== totalMoviePages.value && state.tvPage !== totalTvPages.value) {
        allShows.value = [];
        if (state.moviePage !== 1 || state.tvPage !== 1) {
          state.moviePage = 1;
          state.tvPage = 1;
        }
      }
      const { data: movieShow } = await UseCallCustomApiResponse(props.urlApiMovie, props.movieParams);
      const { data: tvShow } = await UseCallCustomApiResponse(props.urlApiTv, props.tvParams);
      if (totalTvPages.value === undefined || state.tvPage >= totalTvPages.value) {
        allShows.value.push(...[...movieShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      } else if (totalMoviePages.value === undefined || state.moviePage !== totalMoviePages.value) {
        allShows.value.push(...[...tvShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      } else {
        allShows.value.push(...[...movieShow.value?.results || [], ...tvShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      }
      lastMoviePage.value = state.moviePage;
      lastTvPage.value = state.tvPage;
      totalMoviePages.value = movieShow.value?.totalPages;
      totalTvPages.value = tvShow.value?.totalPages;
      canCallNewPage.value = true;


    } else if (state.showType === 'movies') {
      if (lastMoviePage.value === state.moviePage) {
        allShows.value = [];
        if (state.moviePage !== 1) {
          state.moviePage = 1;
        }
      }
      const { data: movieShow } = await UseCallCustomApiResponse(props.urlApiMovie, props.movieParams);
      allShows.value.push(...[...movieShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      lastMoviePage.value = state.moviePage;
      totalMoviePages.value = movieShow.value?.totalPages;
      canCallNewPage.value = true;


    } else if (state.showType === 'tv') {
      if (lastTvPage.value === state.tvPage) {
        allShows.value = [];
        if (state.tvPage !== 1) {
          state.tvPage = 1;
        }
      }
      const { data: tvShow } = await UseCallCustomApiResponse(props.urlApiTv, props.tvParams);
      allShows.value.push(...[...tvShow.value?.results || []].sort((a, b) => b.popularity - a.popularity));
      lastTvPage.value = state.tvPage;
      totalTvPages.value = tvShow.value?.totalPages;
      canCallNewPage.value = true;
    }


    pending.value = false;
  }, 200);
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

const loadingSpin = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(loadingSpin)

watch(() => targetIsVisible.value, (newValue) => {
  const intervalId = setInterval(() => {

    if (canCallNewPage.value && newValue) {
      clearTimeout(timeoutApiCall);
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
    if (!targetIsVisible.value) {
      clearInterval(intervalId);
    }
  }, 100);
})

const isSpinLoading = computed(() => {
  if (tmdbFiltersStore.showType === 'all') {
    if (totalMoviePages.value !== undefined && tmdbFiltersStore.moviePage < totalMoviePages.value || totalTvPages.value !== undefined && tmdbFiltersStore.tvPage < totalTvPages.value) {
      return true
    } else {
      return false
    }
  } else if (tmdbFiltersStore.showType === 'movies') {
    if (totalMoviePages.value !== undefined && tmdbFiltersStore.moviePage < totalMoviePages.value) {
      return true
    } else {
      return false
    }
  } else if (tmdbFiltersStore.showType === 'tv') {
    if (totalTvPages.value !== undefined && tmdbFiltersStore.tvPage < totalTvPages.value) {
      return true
    } else {
      return false
    }
  }
})
</script>
