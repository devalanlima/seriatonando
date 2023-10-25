<template>
  <MoleculesMenuFilter btn-title="Average rating">
    <div class="px-[1px] relative z-10">
      <AtomsSliderRange
        :has-bg="false"
        :start-min-value="1"
        :start-max-value="10"
        v-model:min-value="minValue"
        v-model:max-value="maxValue"
      />
    </div>

    <ul class="flex px-[9px] -mt-[15px] z-0 relative">
      <li class="w-[33%] flex flex-col items-center gap-[8px] relative">
        <p class="absolute text-lg font-bold -left-[2px] top-3">{{ minValue }}</p>
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
        <p class="absolute text-lg font-bold -right-[10px] top-3">{{ maxValue }}</p>
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
const minValue = ref(1)
const maxValue = ref(10)
</script>

<style scoped></style>