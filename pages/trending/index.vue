<template>
  <OrganismsShowsGridLayout
    :movie-params="movieParams"
    :tv-params="tvParams"
    url-api-movie="/api/TMDBTrendingMovie"
    url-api-tv="/api/TMDBTrendingTv"
  />
</template>

<script setup lang="ts">
const projectStore = useProjectStore();

const movieParams = computed(() => {
  return {
    "language": projectStore.language,
  };
});

const tvParams = computed(() => {
  return {
    "language": projectStore.language,
  };
});
</script>