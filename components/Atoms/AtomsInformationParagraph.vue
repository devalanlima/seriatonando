<template>
  <div class="py-5 border-color_primary">
    <h2 class="font-semibold text-xl text-color_primary">{{ props.title }}</h2>
    <p class="dark:text-color_light text-color_terciary dark:font-normal font-semibold">{{ props.paragraph }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  paragraph: string;
}

const props = defineProps<Props>();
</script>