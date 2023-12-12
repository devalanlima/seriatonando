<template>
  <button class="w-fit rounded-md bg-color_primary cursor-pointer" @click="emit('action')">
    <AtomsIconsCross
      width="w-5"
      stroke-width="stroke-2"
      fill-color="fill-color_terciary"
      stroke-color="stroke-color_terciary"
    />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['action'])
</script>
