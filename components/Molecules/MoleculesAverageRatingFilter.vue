<template>
  <MoleculesMenuFilter btn-title="Average rating">
    <div class="px-[1px] relative z-10">
      <AtomsSliderRange
        :has-bg="false"
        :start-min-value="startMinValue"
        :start-max-value="startMaxValue"
        v-model:min-value="tmdbFiltersStore.voteAverageGte"
        v-model:max-value="tmdbFiltersStore.voteAverageLte"
      />
    </div>

    <ul class="flex px-[9px] -mt-[15px] z-0 relative">
      <li class="w-[33%] flex flex-col items-center gap-[8px] relative">
        <p class="absolute text-lg font-bold -left-[2px] top-3">{{ tmdbFiltersStore.voteAverageGte }}</p>
        <span class="rounded-s-full w-full block h-1 bg-color_danger"></span>
        <AtomsIconsEmojiSad
          fill-color="fill-color_danger"
          width="w-6"
        />
      </li>
      <li class="w-[33%] flex flex-col items-center gap-[8px]">
        <span class="w-full block h-1 bg-color_neutral"></span>
        <AtomsIconsEmojiNeutral
          fill-color="fill-color_neutral"
          width="w-6"
        />
      </li>
      <li class="w-[33%] flex flex-col items-center gap-[8px] relative">
        <p class="absolute text-lg font-bold -right-[10px] top-3">{{ tmdbFiltersStore.voteAverageLte }}</p>
        <span class="rounded-e-full w-full block h-1 bg-color_success"></span>
        <AtomsIconsEmojiHappy
          fill-color="fill-color_success"
          width="w-6"
        />
      </li>
    </ul>
  </MoleculesMenuFilter>
</template>

<script setup lang="ts">
const tmdbFiltersStore = useTMDBFiltersStore()
const startMinValue = ref(0)
const startMaxValue = ref(10)
</script>