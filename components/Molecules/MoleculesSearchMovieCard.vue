<template>
  <NuxtLink
    :to="showPath(props.showType, props.showId)"
    class="w-full h-[150px] p-3 border-color_primary flex gap-3 hover:bg-color_primary/10 cursor-pointer"
  >
    <img
      v-if="props.posterPath !== undefined && props.posterPath !== null"
      class="w-[85px]"
      :src="`https://image.tmdb.org/t/p/w154${props.posterPath}`"
      :alt="'Poster' + props.showTitle"
    >
    <div
      v-else
      class="w-full max-w-[85px] h-[115px] grid place-items-center overflow-hidden bg-color_secondary text-xs p-1 text-color_dark text-justify"
    >{{ props.showTitle }}</div>
    <div class="flex grow flex-col h-full overflow-hidden">
      <h3
        class="text-xl whitespace-nowrap text-ellipsis overflow-hidden leading-none cursor-pointer w-fit  hover:text-color_primary transition-colors duration-150 ease-in-out pb-1 max-w-[94%]"
      >
        {{ props.showTitle }}
      </h3>
      <p class="text-color_primary">
        {{ props.showReleaseDate !== null && props.showReleaseDate !== undefined ?
          `(${props.showReleaseDate.split("-")[0]})` :
          "" }}
      </p>
      <div class="w-fit my-auto mb-0">
        <AtomsShowTypeTag :show-type="props.showType" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  showId: number;
  posterPath: string;
  showTitle: string;
  showReleaseDate: string;
  showType: ShowType
}

const props = defineProps<Props>();

const localPath = useLocalePath()

const showPath = (showType: ShowType, showId: number) => {
  if (showType !== 'all') {
    return { path: localPath(`/${showType}`), query: { id: showId } }
  } else {
    return { path: localPath(`/`), query: { id: showId } }
  }
}
</script>

<style scoped></style>