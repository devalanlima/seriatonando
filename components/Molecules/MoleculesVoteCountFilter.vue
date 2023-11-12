<template>
  <MoleculesMenuFilter btn-title="Min. Vote Count">
    <AtomsSlider
      :start-min-value="minVoteCount"
      :start-max-value="maxVoteCount"
      v-model="tmdbFiltersStore.minVoteCount"
    />
    <div class="flex items-center justify-between">
      <p class="w-[45px] text-center block text-lg font-bold">{{ minVoteCount }}</p>
      <p class="w-[45px] text-center block text-lg font-bold text-color_primary">{{ tmdbFiltersStore.minVoteCount }}</p>
      <p class="w-[45px] text-center block text-lg font-bold">{{ maxVoteCount }}</p>
    </div>
    <div class="opacity-20 hover:opacity-100 w-fit h-fit flex bg-color_terciary group rounded-xl hover:p-4 absolute transition-opacity duration-300 ease-in-out bottom-1 left-1">
      <div
      >
        <span
          class="border-[1px] rounded-full p-[1px] w-[20px] h-[20px] text-center inline-block text-xs cursor-pointer"
        >
          ?
        </span>
        <span class="hidden group-hover:inline">
          Changing this value may result in series and films appearing with ratings that do not correspond to reality.
        </span>
      </div>
    </div>
  </MoleculesMenuFilter>
</template>

<script setup lang="ts">
const tmdbFiltersStore = useTMDBFiltersStore()
const minVoteCount = ref(0)
const maxVoteCount = ref(1000)
</script>

<style scoped></style>