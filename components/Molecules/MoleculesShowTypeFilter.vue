<template>
  <nav class="outline outline-2 outline-color_primary py-3 px-3 rounded-xl">
    <ul class="flex items-center gap-5">
      <li
        v-for="showType in showTypes"
        :key="showType"
      >
        <AtomsShowTypeLabelFilter
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
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const selectedShowType = ref<'All' | 'Movies' | 'Series'>('All')

const showTypes = ['All', 'Movies', 'Series']

</script>

<style scoped></style>