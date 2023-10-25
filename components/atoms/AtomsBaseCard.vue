<template>
  <div :class="['p-4 rounded-xl overflow-hiddeng', props.color]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'bg-color_terciary'
})

</script>
