<template>
  <nav class="outline outline-2 outline-color_primary py-3 px-3 rounded-xl">
    <ul class="flex items-center gap-5">
      <li
        v-for="showType in showTypes"
        :key="showType.value"
      >
        <AtomsShowTypeFilter
        v-model="selectedShowType"
        :value="showType.value"
        :name="showType.name"
        :title="`Show ${showType.name}`"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const tmdbFiltersStore = useTMDBFiltersStore()
const selectedShowType = ref<ShowType>("all")

watchEffect(()=>{
  tmdbFiltersStore.setShowType(selectedShowType.value)
})

const showTypes:Array<{
  name: string;
  value: ShowType;
}> = [
  {
    name: "All",
    value: "all"
  },
  {
    name: "Movies",
    value: "movies",
  },
  {
    name: "Series",
    value: "tv"
  }
]

</script>
