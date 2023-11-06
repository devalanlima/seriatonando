<template>
  <label
    :class="['block p-1 outline outline-1 text-center cursor-pointer rounded-lg', isChecked ? 'outline-color_primary outline-2 text-color_primary font-semibold' : 'outline-color_secondary text-color_secondary']"
    :title="props.title"
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
  inputValue: string | boolean;
  modelValue: Array<string> | boolean;
  title: string;
}

const isChecked = computed(() => {
  if (typeof selectedValues.value != 'boolean' && typeof props.inputValue != 'boolean') {
    return selectedValues.value.includes(props.inputValue)
  } else {
    return selectedValues.value
  }
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