<template>
  <div>
    <img
      class="max-w-[50px] rounded-xl"
      :title="props.title"
      :src="`https://image.tmdb.org/t/p/w500/${props.path}`"
      :alt="props.title"
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  path: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>