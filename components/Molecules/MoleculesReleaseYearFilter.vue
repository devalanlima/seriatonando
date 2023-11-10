<template>
  <MoleculesMenuFilter btn-title="Release Year">
    <div class="px-2">
      <AtomsSliderRange
        v-model:min-value="tmdbFiltersStore.releaseYearGte"
        v-model:max-value="tmdbFiltersStore.releaseYearLte"
        :start-min-value="minYear"
        :start-max-value="maxYear"
      />
    </div>
    <div class="flex justify-between">
      <p class="text-lg font-bold">{{ tmdbFiltersStore.releaseYearGte }}</p>
      <p class="text-lg font-bold">{{ tmdbFiltersStore.releaseYearLte }}</p>
    </div>
  </MoleculesMenuFilter>
</template>

<script setup lang="ts">
const tmdbFiltersStore = useTMDBFiltersStore()
const minYear = ref(tmdbFiltersStore.releaseYearGte)
const maxYear = new Date().getFullYear()
</script>

<style scoped></style>