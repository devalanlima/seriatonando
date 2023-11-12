<template>
  <MoleculesMenuFilter
    btn-title="Genres"
    width-card="w-[450px] -left-[350px] md:w-[600px] lg:w-[700px] lg:-left-[150px] xl:left-0"
  >
    <div class="flex flex-col gap-5">
      <MoleculesChooseType v-model="showType" />
      <ul class="grid grid-cols-[repeat(auto-fit,_minmax(147px,_1fr))] place-items-center gap-6 w-full">
        <li class="w-[147px]">
          <label
            class="flex gap-2 items-center cursor-pointer w-fit"
            v-if="showType === 'movies'"
          >
            <AtomsCheckbox v-model="isAllMoviesChecked"/>
            <p :class="['select-none', isAllMoviesChecked ? 'text-color_primary font-semibold' : 'text-color_secondary']">
              {{ tmdbFiltersStore.movieGenres.length === tmdbConfigStore.movieGenres.genres.length ? 'Unselect All' :
                'Select All' }}
            </p>
          </label>
          <label
            class="flex gap-2 items-center cursor-pointer w-fit"
            v-if="showType === 'tv'"
          >
            <AtomsCheckbox v-model="isAllTvChecked"/>
            <p :class="['select-none', isAllTvChecked ? 'text-color_primary font-semibold' : 'text-color_secondary']">
              {{ tmdbFiltersStore.tvGenres.length === tmdbConfigStore.tvGenres.genres.length ? 'Unselect All' :
                'Select All' }}
            </p>
          </label>
        </li>
        <li
          v-for="genre in (showType === 'movies' ? tmdbConfigStore.movieGenres.genres : tmdbConfigStore.tvGenres.genres)"
          :key="genre.id"
          class="w-[147px]"
        >
          <label class="flex gap-2 items-center cursor-pointer w-fit">
            <template v-if="showType === 'movies'">
              <AtomsCheckbox
                v-model="tmdbFiltersStore.movieGenres"
                :input-value="genre.id"
              />
            </template>
            <template v-if="showType === 'tv'">
              <AtomsCheckbox
                v-model="tmdbFiltersStore.tvGenres"
                :input-value="genre.id"
              />
            </template>
            <p v-if="showType === 'movies'" :class="['select-none', tmdbFiltersStore.movieGenres.includes(genre.id) ? 'text-color_primary font-semibold' : 'text-color_secondary']">
              {{ genre.name }}
            </p>
            <p v-if="showType === 'tv'" :class="['select-none', tmdbFiltersStore.tvGenres.includes(genre.id) ? 'text-color_primary font-semibold' : 'text-color_secondary']">
              {{ genre.name }}
            </p>
          </label>
        </li>
      </ul>
    </div>
  </MoleculesMenuFilter>
</template>

<script setup lang="ts">
const tmdbFiltersStore = useTMDBFiltersStore()
const tmdbConfigStore = useTMDBConfigStore()
const isAllMoviesChecked = ref<boolean>(false)
const isAllTvChecked = ref<boolean>(false)
const showType = ref<ShowType>('movies')

watch(()=> tmdbFiltersStore.movieGenres, ()=>{
  if (tmdbFiltersStore.movieGenres.length === tmdbConfigStore.movieGenres.genres.length) {
    isAllMoviesChecked.value = true
  }
  if (tmdbFiltersStore.movieGenres.length === 0) {
    isAllMoviesChecked.value = false
  }
})

watch(()=> tmdbFiltersStore.tvGenres, ()=>{
  if (tmdbFiltersStore.tvGenres.length === tmdbConfigStore.tvGenres.genres.length) {
    isAllTvChecked.value = true
  }
  if (tmdbFiltersStore.movieGenres.length === 0) {
    isAllTvChecked.value = false
  }
})

watch(() => isAllMoviesChecked.value, (newValue) => {
  if (showType.value === 'movies' && newValue) {
    tmdbFiltersStore.movieGenres = []
    tmdbConfigStore.movieGenres.genres.forEach(genre => {
      tmdbFiltersStore.movieGenres.push(genre.id)
    });
  }
  if (showType.value === 'movies' && !newValue) {
    tmdbFiltersStore.movieGenres = []
  }

})

watch(() => isAllTvChecked.value, (newValue) => {
  if (showType.value === 'tv' && newValue) {
    tmdbFiltersStore.tvGenres = []
    tmdbConfigStore.tvGenres.genres.forEach(genre => {
      tmdbFiltersStore.tvGenres.push(genre.id)
    });
  }
  if (showType.value === 'tv' && !newValue) {
    tmdbFiltersStore.tvGenres = []
  }
})

</script>
