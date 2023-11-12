<template>
  <label :class="[selectedValue.includes(props.value) ? `text-color_primary after:w-full` : 'text-color_secondary', `text-xl cursor-pointer relative after:content-[''] after:block after:h-[2px] after:bg-color_primary after:absolute after:bottom-0 after:w-0 after:transition-all after:duration-150 after:ease-in-out hover:after:w-full`]">
    {{ props.label }}
    <input
      class="sr-only"
      type="radio"
      v-model="selectedValue"
      :value="props.value"
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  value: ShowType;
  modelValue: ShowType;
}

const props = defineProps<Props>()

const emit = defineEmits<{
  "update:modelValue": [value: typeof props.modelValue]
}>()

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(selectedValue) {
    emit("update:modelValue", selectedValue)
  }
})

</script>

<style scoped></style>