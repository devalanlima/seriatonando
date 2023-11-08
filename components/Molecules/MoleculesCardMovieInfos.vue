<template>
  <AtomsBaseCard class="flex relative overflow-hidden h-full flex-col justify-between gap-3">
    <div class="flex flex-col justify-start gap-1 h-fit">
      <a
        v-if="props.movieTitle != 'loading'"
        :title="props.movieTitle"
        href="#"
        class="relative text-xl whitespace-nowrap text-ellipsis overflow-hidden leading-none cursor-pointer w-fit max-w-[90%] hover:text-color_primary transition-colors duration-150 ease-in-out pb-1"
      >{{ props.movieTitle }}</a>
      <div
        v-else
        class="max-w-[70%] h-[20px] bg-color_secondary animate-pulse rounded-md"
      >

      </div>
      <p
        v-if="props.movieGenres != 'loading'"
        class="whitespace-nowrap text-ellipsis overflow-hidden text-color_secondary text-opacity-80 text-sm relative before:absolute before:content-[''] before:bg-gradient-to-r before:-right-3 before:from-transparent before:to-80% before:to-color_terciary before:block before:w-[80px] before:h-5 before:pointer-events-none"
      >
        {{ props.movieGenres.join(" / ") }}
      </p>
      <div
        v-else
        class="w-[60%] h-[15px] bg-color_secondary animate-pulse my-2 rounded-md"
      ></div>
      <p
        v-if="props.movieOverview != 'loading'"
        class="truncate-text text-sm pr-0  before:content-[''] before:bg-gradient-to-r before:from-transparent before:to-90% before:to-color_terciary before:block before:w-[100px] before:h-5 before:pointer-events-none"
      >
        {{ props.movieOverview }}
      </p>
      <div
        v-else
        class="flex flex-wrap gap-x-3 gap-y-2 w-full"
      >
        <template v-for="item in 2">
          <span class="block min-w-[30%] bg-color_secondary h-[10px] animate-pulse my-1 rounded-md"></span>
          <span class="block min-w-[50%] bg-color_secondary h-[10px] animate-pulse my-1 rounded-md"></span>
          <span class="block min-w-[40%] bg-color_secondary h-[10px] animate-pulse my-1 rounded-md"></span>
        </template>
      </div>
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
  movieGenres: Array<number> | 'loading';

}

const props = defineProps<Props>();

</script>

<style scoped></style>