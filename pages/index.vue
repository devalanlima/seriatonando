<template>
  <div class="grid grid-cols-[repeat(auto-fit,_minmax(375px,_1fr))] place-items-center gap-5">
    <OrganismsMovieCard v-for="item in 20" />
  </div>
</template>

<script setup lang="ts">
const minValue = ref(1)
const maxValue = ref(100)
</script>

<style scoped></style>