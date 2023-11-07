<template>
  <div
    class="flex md:rounded-xl outline-2 outline outline-transparent hover:outline-color_primary relative w-full h-[210px] max-w-[768px] transition-color duration-300"
  >
    <AtomsCheckbox
      class="absolute top-2 left-[110px] z-10"
      v-model="watchedMovie"
      :title="watchedMovie ? `Mark ${props.movieTitle} as unseen` : `Mark ${props.movieTitle} as seen`"
    />
    <a href="#" class="min-w-[140px] block md:rounded-s-xl overflow-hidden">
      <img
        :src="imagePoster"
        :alt="`Poster of ${props.movieTitle}`"
      >
    </a>
    <AtomsWatchlistBtn
      class="absolute z-10 -top-1 right-5"
      v-model="watchlistMovie"
      :title="watchlistMovie ? `Remove ${props.movieTitle} from watchlist` : `Add ${props.movieTitle} to watchlist`"
    />
    <MoleculesCardMovieInfos
    :movie-title="props.movieTitle"
    :movie-overview="props.movieOverview"
    :movie-genres="props.movieGenres"
    class="rounded-e-none md:rounded-e-xl rounded-s-none w-full" />
  </div>
</template>

<script setup lang="ts">
const watchlistMovie = ref(false)
const watchedMovie = ref(false)
const imagePoster = computed(()=> `https://image.tmdb.org/t/p/w200${props.posterPath}`)

interface Props {
  movieTitle: string;
  movieOverview: string;
  posterPath: string;
  movieGenres: Array<number>;
}

const props = defineProps<Props>()
</script>

<style scoped></style>