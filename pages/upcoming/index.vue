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
    "watch_region": projectStore.region,
    "primary_release_date.gte": tmdbFiltersStore.releaseDateLte,

  };
});

const tvParams = computed(() => {
  return {
    "language": projectStore.language,
    "first_air_date.gte": tmdbFiltersStore.releaseDateLte,
    "watch_region": projectStore.region,
  };
});
</script>