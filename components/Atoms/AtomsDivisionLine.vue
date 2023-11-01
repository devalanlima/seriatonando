<template>
  <div :class="['block', props.color, orientation]"></div>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
  orientation?: 'vertical' | 'horizontal'
}

const props = withDefaults(defineProps<Props>(), {
  color: "bg-color_primary",
  orientation: "horizontal",
})

const orientation = computed((): string => {
  switch (true) {
    case props.orientation === "horizontal":
      return "w-full h-[1px]"
      break;
    case props.orientation === "vertical":
      return "h-full w-[1px]"
      break;
    default:
    return ""
      break;
  }
})
</script>