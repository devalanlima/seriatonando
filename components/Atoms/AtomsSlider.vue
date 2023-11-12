<template>
  <div class="max-w-xl min-h-[25px] grid place-items-center relative px-[10px] w-full">
    <div :class="['relative h-[2px] rounded-full w-full',
      props.hasBg ? 'bg-color_primary/50' : ''
    ]">
      <input
        type="range"
        :min="min"
        :max="max"
        v-model="selectedValue"
        class="slider w-full cursor-pointer absolute"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  startMinValue: number;
  startMaxValue: number;
  modelValue: number;
  hasBg?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  hasBg: true,
})
const emit = defineEmits<{
  'update:modelValue': [value: number],
}>()

const min = ref<number>(props.startMinValue)
const max = ref<number>(props.startMaxValue)

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(selectedValue) {
    emit('update:modelValue', selectedValue)
  }
})

</script>

<style scoped>
.slider {
  -webkit-appearance: none;
  appearance: none;
  @apply h-[2px] bg-transparent pointer-events-none border-0;
}


.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  @apply w-5 h-5 bg-color_primary cursor-pointer pointer-events-auto rounded-full transition-all duration-200 ease-in-out outline-color_primary border-0;
}

.slider::-webkit-slider-thumb:hover {
  @apply scale-110 outline outline-8 outline-color_primary/25;
}

.slider::-moz-range-thumb {
  @apply w-5 h-5 bg-color_primary cursor-pointer pointer-events-auto rounded-full transition-all duration-200 ease-in-out outline-color_primary border-0;
}

.slider::-moz-range-thumb:hover {
  @apply scale-110 outline outline-8 outline-color_primary/25;
}
</style>