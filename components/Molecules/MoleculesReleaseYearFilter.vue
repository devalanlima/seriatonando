<template>
  <MoleculesMenuFilter btn-title="Release Year">
    <div class="px-2">
      <AtomsSliderRange
        v-model:min-value="minYear"
        v-model:max-value="maxYear"
        :start-min-value="1865"
        :start-max-value="new Date().getFullYear()"
      />
    </div>
    <div class="flex justify-between">
      <p class="text-lg font-bold">{{ minYear }}</p>
      <p class="text-lg font-bold">{{ maxYear }}</p>
    </div>
  </MoleculesMenuFilter>
</template>

<script setup lang="ts">
const minYear = ref(1865)
const maxYear = ref(new Date().getFullYear())  
</script>

<style scoped></style>