<template>
  <button
    :class="['p-4 inline-flex justify-center items-center h-fit rounded-xl bg-color_primary/90 hover:bg-color_primary hover:scale-105 transition-all duration-200 ease-in-out', props.background ? 'bg-color_primary' : 'bg-transparent']"
    @click="emit('action')"
  >
  {{ props.label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  background?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  background: true,
})
const emit = defineEmits(['action'])
</script>

<style scoped></style>