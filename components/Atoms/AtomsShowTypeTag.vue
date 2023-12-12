<template>
  <div
    class="bg-color_light h-[32px] px-3 grid place-items-center rounded-full text-color_highlight font-semibold"
    :title="props.showType === 'movies' ? 'Movie' : props.showType === 'tv' ? 'Tv | Serie' : 'All'"
  >
    {{ props.showType === 'movies' ? "Movie" : props.showType === "tv" ? "Tv | Serie" : "All" }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  showType: ShowType;
}

const props = defineProps<Props>();
</script>