<template>
  <article class="relative mb-10">
    <ul class="p-1 gap-5 grid grid-cols-[repeat(auto-fill,_minmax(375px,_1fr))] justify-items-center">
      <template
        v-for="show in allShows"
        :key="show.id"
      >
        <li
          class="w-full h-[210px]"
          v-if="isLoading"
        >
          <OrganismsMovieCard
            :show-title="show.title"
            :show-genres="show.genres"
            :show-overview="show.overview"
            :poster-path="(show.posterPath != null ? show.posterPath : 'not found')"
            :show-type="show.showType"
            :show-id="show.id"
          />
        </li>
      </template>
      <template v-if="!isLoading">
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
      class="-bottom-14 w-full flex justify-center items-end absolute pointer-events-none h-screen"
      ref="loadingSpin"
    >
      <AtomsLoadSpin
        v-if="showSpin"
        size="medium"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import useCallCustomApiResponse from '~/composables/UseCallCustomApiResponse';
const tmdbFiltersStore = useTMDBFiltersStore();

onUnmounted(() => {
  tmdbFiltersStore.resetStore();
})

interface Props {
  urlApiMovie: string;
  urlApiTv: string;
  movieParams: object;
  tvParams: object;
}

const props = defineProps<Props>();



const moviesPage = ref(1);
const movieParams = computed(() => {
  return {
    "page": moviesPage.value,
    ...props.movieParams,
  };
});

const tvPage = ref(1);
const tvParams = computed(() => {
  return {
    "page": tvPage.value,
    ...props.tvParams,
  };
});

const allShows = ref<Array<MoviesAndTv>>([]);

const movies = ref<Array<MoviesAndTv>>([]);
const totalMoviesPages = ref<number | undefined>(999);
const moviePending = ref<boolean>(true);
const searchMovies = async () => {
  moviePending.value = true
  const { data: dataMovie, pending: pendingMovie, error: errorMovie } = await useCallCustomApiResponse(props.urlApiMovie, movieParams);
  moviePending.value = pendingMovie.value
  totalMoviesPages.value = dataMovie.value?.totalPages
  if (dataMovie.value?.results !== undefined && tmdbFiltersStore.showType === 'all' || tmdbFiltersStore.showType === 'movies') {
    return dataMovie.value?.results
  }
};

const tv = ref<Array<MoviesAndTv>>([]);
const totalTvPages = ref<number | undefined>(999);
const tvPending = ref<boolean>(true);
const searchTv = async () => {
  tvPending.value = true;
  const { data: dataTv, pending: pendingTv, error: errorTv } = await useCallCustomApiResponse(props.urlApiTv, tvParams);
  tvPending.value = pendingTv.value;
  totalTvPages.value = dataTv.value?.totalPages;
  if (dataTv.value?.results !== undefined && tmdbFiltersStore.showType === 'all' || tmdbFiltersStore.showType === 'tv') {
    return dataTv.value?.results
  }
};

const pushShows = async () => {
  if (tmdbFiltersStore.showType === 'all') {
    let arr = [... await searchMovies() || [], ... await searchTv() || []].sort((a, b) => b.popularity - a.popularity);
    allShows.value.push(...arr);
  } else if (tmdbFiltersStore.showType === 'movies') {
    let arr = [... await searchMovies() || []].sort((a, b) => b.popularity - a.popularity);
    allShows.value.push(...arr);
  } else if (tmdbFiltersStore.showType === 'tv') {
    let arr = [... await searchTv() || []].sort((a, b) => b.popularity - a.popularity);
    allShows.value.push(...arr)
  }
};

await pushShows();

const { pause, resume, isActive } = useIntervalFn(async () => {
  if (!moviePending.value && !tvPending.value && tmdbFiltersStore.showType === 'all') {
    if (totalMoviesPages.value !== undefined && moviesPage.value < totalMoviesPages.value && totalMoviesPages.value > 1) {
      moviesPage.value++;
    }
    if (totalTvPages.value !== undefined && tvPage.value < totalTvPages.value && totalTvPages.value > 1) {
      tvPage.value++;
    }
    if (totalMoviesPages.value !== undefined && moviesPage.value < totalMoviesPages.value && totalMoviesPages.value > 1 || totalTvPages.value !== undefined && tvPage.value < totalTvPages.value && totalTvPages.value > 1) {
      await pushShows();
    }
  } else if (!moviePending.value && tmdbFiltersStore.showType === 'movies') {
    if (totalMoviesPages.value !== undefined && moviesPage.value < totalMoviesPages.value && totalMoviesPages.value > 1) {
      moviesPage.value++;
      await pushShows();
    }
  } else if (!tvPending.value && tmdbFiltersStore.showType === 'tv') {
    if (totalTvPages.value !== undefined && tvPage.value < totalTvPages.value && totalTvPages.value > 1) {
      tvPage.value++;
      await pushShows();
    }
  }
}, 300);
pause();

let timeoutApiCall: ReturnType<typeof setTimeout>;
tmdbFiltersStore.$subscribe(async (mutation, state) => {
  clearTimeout(timeoutApiCall);
  timeoutApiCall = setTimeout(async () => {
    resetPage();
  }, 300);
})

const resetPage = async () => {
  allShows.value = [];
  movies.value = [];
  tv.value = [];
  moviesPage.value = 1;
  tvPage.value = 1;
  totalTvPages.value = 1;
  totalMoviesPages.value = 1;
  await pushShows();
};


const isLoading = computed(() => {
  switch (tmdbFiltersStore.showType) {
    case 'all':
      if (moviesPage.value === 1 && tvPage.value === 1) {
        return !tvPending.value && !moviePending.value;
      } else {
        return true;
      }

    case 'movies':
      if (moviesPage.value === 1) {
        return !moviePending.value;
      } else {
        return true;
      }

    case 'tv':
      if (tvPage.value === 1) {
        return !tvPending.value;
      } else {
        return true;
      }
    default:
      return false;
      break;
  }
});

const loadingSpin = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(loadingSpin)
const showSpin = computed(() => {
  if (totalMoviesPages.value !== undefined && totalTvPages.value !== undefined) {
    if (tmdbFiltersStore.showType === 'all') {
      if (moviesPage.value >= totalMoviesPages.value && tvPage.value >= totalTvPages.value) {
        return false
      } else {
        return true
      }
    } else if (tmdbFiltersStore.showType === 'movies') {
      if (moviesPage.value >= totalMoviesPages.value) {
        return false
      } else {
        return true
      }
    } else if (tmdbFiltersStore.showType === 'tv') {
      if (tvPage.value >= totalTvPages.value) {
        return false
      } else {
        return true
      }
    }
  } else {
    return true
  }
});

watch(() => targetIsVisible.value, (newValue) => {
  if (newValue) {
    resume();
  } else {
    pause();
  }
});

</script>
