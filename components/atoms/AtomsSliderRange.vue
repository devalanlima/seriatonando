<template>
  <div class="max-w-xl min-h-[25px] grid place-items-center relative px-[10px]">
    <div class="relative h-[2px] bg-color_primary/50 rounded-full w-full">
      <input
        type="range"
        :min="min"
        :max="max"
        @input="updateMin"
        v-model="minValue"
        class="slider h-2 w-full cursor-pointer absolute right-[10px]"
      >
      <input
        type="range"
        :min="min"
        :max="max"
        @input="updateMax"
        v-model="maxValue"
        class="slider h-2 w-full cursor-pointer absolute left-[10px]"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  minValue: number;
  maxValue: number;
}
const props = defineProps<Props>()

const min = computed(() => props.minValue)

const max = computed(() => props.maxValue)

const minValue = ref<number>(min.value);
const maxValue = ref<number>(max.value);

const emit = defineEmits(['output'])

const output = () => emit('output', {
  min: minValue.value,
  max: maxValue.value
})

function updateMin() {
  if (minValue.value >= maxValue.value) {
    maxValue.value = Number(Math.max(minValue.value, maxValue.value));
    minValue.value = Number(Math.min(minValue.value, maxValue.value));
  }
  output()
}

function updateMax() {
  if (maxValue.value <= minValue.value) {
    minValue.value = Number(Math.min(minValue.value, maxValue.value));
    maxValue.value = Number(Math.max(minValue.value, maxValue.value));
  }
  output()
}

onMounted(()=>{
  output()
})
</script>

<style scoped>
.slider {
  -webkit-appearance: none;
  appearance: none;
  @apply h-0 bg-transparent pointer-events-none border-0;
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
  @apply  scale-110 outline outline-8 outline-color_primary/25;
}
</style>