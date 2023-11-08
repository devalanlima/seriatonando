<template>
  <template v-if="pending">
    <OrganismsMovieCard
      v-for="load in 20"
      :key="load"
      movie-title="loading"
      movie-genres="loading"
      movie-overview="loading"
      poster-path="loading"
    />
  </template>
  <template v-else>
    <OrganismsMovieCard
      v-for="movie in movies?.results"
      :key="movie.id"
      :movie-title="(typeof movie.title === 'string' ? movie.title : typeof movie.name === 'string' ? movie.name : movie.original_title)"
      :movie-genres="movie.genre_ids"
      :movie-overview="movie.overview"
      :poster-path="(movie.poster_path != null? movie.poster_path: 'not found')"
    />
  </template>
</template>

<script setup lang="ts">
interface Show {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Discover {
  page: number;
  results: Array<Show>;
  total_pageS: number;
  total_results: number
}

const projectStore = useProjectStore()
const tmdbFiltersStore = useTMDBFiltersStore()

import { computed, ref, watch } from 'vue';

const params = computed(() => {
  return {
    "language": projectStore.language,
    "certification_country": projectStore.region,
    "page": 1,
    "region": projectStore.region,
    "release_date.gte": tmdbFiltersStore.releaseDateGte,
    "release_date.lte": tmdbFiltersStore.releaseDateLte,
    "sort_by": "popularity.desc",
    "vote_average.gte": tmdbFiltersStore.voteAverageGte,
    "vote_average.lte": tmdbFiltersStore.voteAverageLte,
    "watch_region": projectStore.region,
  };
});

const debounceParams = ref(params.value);
let timeoutId: ReturnType<typeof setTimeout>;
const debounce = <T>(item: T, delay: number): Promise<T> => {
  return new Promise<T>((resolve) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      resolve(item);
    }, delay);
  });
};

watch(() => params.value, () => {
  debounce(params.value, 500).then((result) => {
    debounceParams.value = result;
  });
});


const { data: movies, pending } = await useFetch<Discover>('/api/TMDB', {
  params: debounceParams,
})


</script>
