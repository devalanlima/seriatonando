<template>
  <teleport to="body">
    <div :class="['fixed w-screen h-screen bg-color_dark/70 backdrop-blur-sm top-0 left-0', props.index ]"></div>
  </teleport>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{index: string}>(),{
  index: 'z-40'
});
</script>