<template>
  <div
    class="w-full relative"
    ref="target"
  >
    <AtomsSearchbar
      v-model="searchbarValue"
      placeholder="Search..."
    />
    <div
      v-if="debouncedSearchbarValue.length > 0 && isSearchOpen"
      class="absolute top-11 left-0 z-50 bg-color_highlight dark:bg-color_dark outline-2 outline outline-color_primary w-full rounded-xl overflow-hidden"
    >
      <ul
        class="flex flex-col overflow-y-auto max-h-[500px] gap-3 md:p-3 divide-y"
        v-if="result.length > 0"
      >
        <li
          v-for="item in result"
          class="border-color_primary"
          @click="searchbarValue = ''"
        >
          <MoleculesSearchMovieCard
            :show-title="item.title"
            :show-release-date="item.releaseDate"
            :show-type="item.showType"
            :show-id="item.id"
            :poster-path="item.posterPath"
          />
        </li>
      </ul>
      <div
        v-if="totalResults === 0 && !showPending"
        class="p-3"
      >
        <p>Your search didn't find anything, try searching for keywords if you don't remember the full
          name of the show.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCallCustomApiResponse from "~/composables/UseCallCustomApiResponse";
const projectStore = useProjectStore();
const searchbarValue = ref("");

const debouncedSearchbarValue = debouncedRef(searchbarValue);
const result = ref<Array<MoviesAndTv>>([]);

const params = computed(() => {
  return {
    "query": debouncedSearchbarValue.value,
    "language": projectStore.language,
  }
})

const showPending = ref(false);
const totalPages = ref<number | undefined>();
const totalResults = ref<number | undefined>();

const searchMovies = async () => {
  showPending.value = true
  const { data, pending, error } = await useCallCustomApiResponse('/api/TMDBSearchMulti', params);
  showPending.value = pending.value
  totalPages.value = data.value?.totalPages
  totalResults.value = data.value?.totalResults
  if (data.value?.results !== undefined) {
    result.value = data.value?.results
  }
};

const isSearchOpen = ref<boolean>(false);

watch(() => debouncedSearchbarValue.value, () => {
  isSearchOpen.value = true;
  searchMovies();
})

const target = ref(null)
onClickOutside(target, () => {
  isSearchOpen.value = false
  searchbarValue.value = ""
})

</script>
