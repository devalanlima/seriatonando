<template>
  <template v-if="moviePending && tvPending">
    <OrganismsMovieCard
      v-for="load in 20"
      :key="load"
      show-title="loading"
      show-genres="loading"
      show-overview="loading"
      poster-path="loading"
      show-type="all"
    />
  </template>
  <template v-else>
    <OrganismsMovieCard
      v-for="show in allShows.sort((a, b) => b.popularity - a.popularity)"
      :key="show.id"
      :show-title="show.title"
      :show-genres="show.genres"
      :show-overview="show.overview"
      :poster-path="(show.posterPath != null ? show.posterPath : 'not found')"
      :show-type="show.showType"
    />
  </template>
</template>

<script setup lang="ts">
import useDebouncedComputed from '~/composables/UseDebouncedComputed';

const projectStore = useProjectStore()
const tmdbFiltersStore = useTMDBFiltersStore()


const movieParams = computed(() => {
  return {
    "language": projectStore.language,
    "certification_country": projectStore.region,
    "page": 1,
    "region": projectStore.region,
    "primary_release_date.gte": tmdbFiltersStore.releaseDateGte,
    "primary_release_date.lte": tmdbFiltersStore.releaseDateLte,
    "sort_by": tmdbFiltersStore.sortBy,
    "vote_average.gte": tmdbFiltersStore.voteAverageGte,
    "vote_average.lte": tmdbFiltersStore.voteAverageLte,
    "watch_region": projectStore.region,
    "vote_count.gte": 100,
    "with_watch_providers": tmdbFiltersStore.providers.join('|'),
    "certification": tmdbFiltersStore.certifications.join('|'),
    "with_genres": tmdbFiltersStore.movieGenres.join('|'),
  };
});

const tvParams = computed(() => {
  return {
    "language": projectStore.language,
    "page": 1,
    "region": projectStore.region,
    "air_date.gte": tmdbFiltersStore.releaseDateGte,
    "air_date.lte": tmdbFiltersStore.releaseDateLte,
    "sort_by": tmdbFiltersStore.sortBy,
    "vote_average.gte": tmdbFiltersStore.voteAverageGte,
    "vote_average.lte": tmdbFiltersStore.voteAverageLte,
    "watch_region": projectStore.region,
    "vote_count.gte": 100,
    "with_watch_providers": tmdbFiltersStore.providers.join('|'),
    "with_genres": tmdbFiltersStore.tvGenres.join('|'),
  };
});

const debouncedMovieParams = useDebouncedComputed(movieParams);
const debouncedTvParams = useDebouncedComputed(tvParams);

const { data: movieShow, pending: moviePending } = await UseCallCustomApiResponse('/api/TMDBDiscoverMovie', debouncedMovieParams);
const { data: tvShow, pending: tvPending } = await UseCallCustomApiResponse('/api/TMDBDiscoverTv', debouncedTvParams);

const allShows = computed<Array<MoviesAndTv>>(() => {
  let all: Array<MoviesAndTv> = []
  if (tmdbFiltersStore.showType === 'all') {
    all = [...movieShow.value as Array<MoviesAndTv>, ...tvShow.value as Array<MoviesAndTv>]
  } else if (tmdbFiltersStore.showType === 'movies') {
    all = [...movieShow.value as Array<MoviesAndTv>]
  } else if (tmdbFiltersStore.showType === 'tv') {
    all = [...tvShow.value as Array<MoviesAndTv>]
  }
  return all;
})

</script>
