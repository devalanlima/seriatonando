<template>
  <div class="flex flex-col gap-2 border-color_primary">
    <h2 class="font-semibold text-xl text-color_primary">{{ props.title }}</h2>
    <MoleculesPeopleCarousel :people="props.people" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  people: Array<People>;
}

const props = defineProps<Props>();
</script>

<style scoped></style>