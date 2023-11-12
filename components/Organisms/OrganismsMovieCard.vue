<template>
  <div
    class="flex md:rounded-xl hover:outline-2 hover:outline hover:outline-color_primary relative w-full h-[210px] max-w-[768px] transition-color duration-300 outline outline-2 outline-color_terciary"
  >
    <AtomsCheckbox
      class="absolute top-2 left-[110px] z-10"
      v-model="watchedMovie"
      :title="watchedMovie ? `Mark ${props.showTitle} as unseen` : `Mark ${props.showTitle} as seen`"
    />
    <a href="#" class="min-w-[140px] block md:rounded-s-xl overflow-hidden">
      <div v-if="props.posterPath === 'loading'" class="w-full h-full block bg-color_secondary animate-pulse"></div>
      <div v-else-if="props.posterPath === 'not found'" class="w-full h-full bg-color_secondary/50 grid place-items-center px-5 text-center text-color_terciary">Poster not found</div>
      <img
        v-else
        :src="imagePoster"
        :alt="`Poster of ${props.showTitle}`"
      >
    </a>
    <AtomsWatchlistBtn
      class="absolute z-10 -top-1 right-5"
      v-model="watchlistMovie"
      :title="watchlistMovie ? `Remove ${props.showTitle} from watchlist` : `Add ${props.showTitle} to watchlist`"
    />
    <MoleculesCardMovieInfos
    :show-title="props.showTitle"
    :show-overview="props.showOverview"
    :show-genres="props.showGenres"
    :show-type="props.showType"
    class="rounded-e-none md:rounded-e-xl rounded-s-none w-full" />
  </div>
</template>

<script setup lang="ts">
const watchlistMovie = ref(false)
const watchedMovie = ref(false)
const imagePoster = computed<string>(()=>{
  if (props.posterPath === 'not found') {
    return 'not found'
  } else {
    return `https://image.tmdb.org/t/p/w200${props.posterPath}`
  }
})

interface Props {
  showTitle: string;
  showOverview: string;
  posterPath?: string;
  showGenres: Array<number> | 'loading';
  showType: ShowType;
}

const props = defineProps<Props>()
</script>

<style scoped></style>