<template>
  <OrganismsShowsGridLayout
    :movie-params="movieParams"
    :tv-params="tvParams"
    url-api-movie="/api/TMDBDiscoverMovie"
    url-api-tv="/api/TMDBDiscoverTv"
  />
</template>

<script setup lang="ts">
const projectStore = useProjectStore();
const tmdbFiltersStore = useTMDBFiltersStore();

const movieParams = computed(() => {
  return {
    "language": projectStore.language,
    "certification_country": tmdbFiltersStore.certifications.length > 0 ? projectStore.region : undefined,
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
</script>