<template>
  <AtomsBaseCard class="flex relative overflow-hidden h-full flex-col justify-between gap-3">
    <div class="flex flex-col justify-start gap-1 h-fit">
      <a
        :title="props.movieTitle"
        href="#"
        class="relative text-xl whitespace-nowrap text-ellipsis overflow-hidden leading-none cursor-pointer w-fit max-w-[90%] hover:text-color_primary transition-colors duration-150 ease-in-out pb-1"
      >{{ props.movieTitle }}</a>
      <p
        class="whitespace-nowrap text-ellipsis overflow-hidden text-color_secondary text-opacity-80 text-sm relative before:absolute before:content-[''] before:bg-gradient-to-r before:-right-3 before:from-transparent before:to-80% before:to-color_terciary before:block before:w-[80px] before:h-5 before:pointer-events-none">
        {{ props.movieGenres.join(" / ") }}</p>
      <p
        class="truncate-text text-sm pr-0  before:content-[''] before:bg-gradient-to-r before:from-transparent before:to-90% before:to-color_terciary before:block before:w-[100px] before:h-5 before:pointer-events-none">
        {{ props.movieOverview }}
      </p>
    </div>
    <div class="flex justify-start">
      <MoleculesMovieProviders />
      <MoleculesAvaliationButtons />
    </div>
  </AtomsBaseCard>
</template>

<script setup lang="ts">
interface Props {
  movieTitle: string;
  movieOverview: string;
  movieGenres: Array<number>;
  
}

const props = defineProps<Props>();

</script>

<style scoped></style>