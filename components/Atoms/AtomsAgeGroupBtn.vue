<template>
  <label
    :class="['block p-1 outline outline-1 text-center cursor-pointer rounded-lg', isChecked ? 'outline-color_primary outline-2 text-color_primary font-semibold' : 'outline-color_secondary text-color_secondary']"
    :title="props.inputValue"
  >
    <p class="whitespace-nowrap">{{ props.inputName }}</p>
    <input
      class="sr-only"
      type="checkbox"
      :value="props.inputValue"
      v-model="selectedValues"
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  inputName: string;
  inputValue: string;
  modelValue: Array<string>;
}

const isChecked = computed(() => {
  return selectedValues.value.includes(props.inputValue)
})

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: typeof props.modelValue]
}>()

const selectedValues = computed({
  get() {
    return props.modelValue
  },
  set(selectedValues) {
    emit("update:modelValue", selectedValues)
  }
})
</script>