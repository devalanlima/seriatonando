<template>
  <div
    class="flex rounded-xl outline-2 outline outline-transparent hover:outline-color_primary relative w-full h-[210px] max-w-[600px] transition-color duration-300"
  >
    <AtomsCheckbox
      class="absolute top-2 left-[110px] z-10"
      v-model="watchedMovie"
      :title="watchedMovie ? `Mark ${movieName} as unseen` : `Mark ${movieName} as seen`"
    />
    <img
      class="rounded-s-lg h-full aspect-auto select-none"
      :src="imagePoster"
      alt="poster"
    >
    <AtomsWatchlistBtn
      class="absolute z-10 -top-1 right-5"
      v-model="watchlistMovie"
      :title="watchlistMovie ? `Remove ${movieName} from watchlist` : `Add ${movieName} to watchlist`"
    />
    <MoleculesCardMovieInfos class="rounded-s-none" />
  </div>
</template>

<script setup lang="ts">
const watchlistMovie = ref(false)
const watchedMovie = ref(false)
const movieName = ref('Equalizer')
const imagePoster = ref('https://via.placeholder.com/140x210')
</script>

<style scoped></style>