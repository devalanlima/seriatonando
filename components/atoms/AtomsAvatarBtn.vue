<template>
  <button class="w-12 h-12 rounded-lg overflow-hidden" @click="action">
    <img src="https://placehold.co/600x600" alt="Profile Picture">
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['action'])

const action = ()=>emit('action')

</script>

<style scoped>

</style>