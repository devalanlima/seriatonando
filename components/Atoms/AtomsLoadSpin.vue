<template>
  <div
    :class="['border-color_secondary animate-spin rounded-full border-4 block py-1', props.color, size]"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'small' | 'medium' | 'large',
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  color: 'border-t-color_primary'
})

const size = computed<string>(() => {
  switch (props.size) {
    case 'small':
      return 'h-5 w-5'
      break;
    case 'medium':
      return 'h-10 w-10'
      break;
    case 'large':
      return 'h-20 w-20'
      break;
    default:
      return 'h-10 w-10'
      break;
  }
})
</script>

<style scoped></style>