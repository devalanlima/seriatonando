<template>
  <ul class="flex flex-col pt-2 text-lg">
    <li
      class="py-2 px-0 pl-7 hover:bg-color_primary/50 bg- cursor-pointer box-border"
      v-for="(item, index) in props.options"
      :key="index"
      @click="$emit('update:output', index)"
    >
      {{ item }}
    </li>
    <li
      v-if="$slots.lastOption"
      class="mt-2 border-t-2 pt-4 border-color_primary/50"
    >
      <slot name="lastOption"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">

interface Props {
  options: Array<string>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:output': [value: number]
}>()

</script>