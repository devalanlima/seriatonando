<template>
  <AtomsBaseCard color="bg-transparent" class="outline outline-2 outline-color_primary flex gap-5">
    <AtomsShowTypeLabelFilter
      v-for="showType in showTypes"
      :key="showType"
      :title="showType"
      :is-checked="selectedShowType.includes(showType)"
    >
      <input
        type="radio"
        :value="showType"
        v-model="selectedShowType"
        name="showTypes"
        class="sr-only"
      >
    </AtomsShowTypeLabelFilter>
  </AtomsBaseCard>
</template>

<script setup lang="ts">
const selectedShowType = ref<'All' | 'Movies' | 'Series'>('All')

const showTypes = ['All', 'Movies', 'Series']

</script>

<style scoped></style>