<template>
  <div class="max-w-xl min-h-[25px] grid place-items-center relative px-[10px] w-full">
    <div :class="['relative h-[2px] rounded-full w-full',
      props.hasBg ? 'bg-color_primary/50' : ''
    ]">
      <input
        type="range"
        :min="min"
        :max="max"
        @input="updateMin"
        v-model="minValue"
        class="slider w-full cursor-pointer absolute right-[10px]"
      >
      <input
        type="range"
        :min="min"
        :max="max"
        @input="updateMax"
        v-model="maxValue"
        class="slider w-full cursor-pointer absolute left-[10px]"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  startMinValue: number;
  startMaxValue: number;
  minValue: number;
  maxValue: number;
  hasBg?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  hasBg: true,
})

const min = ref(props.startMinValue)
const max = ref(props.startMaxValue)

const minValue = ref<number>(props.minValue);
const maxValue = ref<number>(props.maxValue);

const emit = defineEmits<{
  'update:minValue': [value: number],
  'update:maxValue': [value: number],
}>()

const sendEmit = () => {
  emit('update:maxValue', maxValue.value)
  emit('update:minValue', minValue.value)
}

function updateMin() {
  if (minValue.value >= maxValue.value) {
    maxValue.value = Number(Math.max(minValue.value, maxValue.value));
    minValue.value = Number(Math.min(minValue.value, maxValue.value));
  }
  sendEmit()
}

function updateMax() {
  if (maxValue.value <= minValue.value) {
    minValue.value = Number(Math.min(minValue.value, maxValue.value));
    maxValue.value = Number(Math.max(minValue.value, maxValue.value));
  }
  sendEmit()
}

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