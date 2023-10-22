<template>
  <button @click="emit('action')" :title="props.title">
    <component
      :is="props.icon"
      :fill-color="props.fillColor"
      :width="props.width"
    />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['action'])
interface Props {
  icon: object;
  fillColor?: string;
  width?: string;
  title: string;
}
const props = withDefaults(defineProps<Props>(), {
  fillColor: 'fill-color_primary',
  width: 'w-[55px]'
})
</script>

<style scoped></style>