<template>
  <label class="w-fit h-fit">
    <span class="sr-only">Switch Button</span>
    <input
      type="checkbox"
      class="sr-only"
      v-model="isChecked"
    >
    <component
      :is="props.icon"
      width="w-6"
      :fill-color="isChecked? props.checkedColor : props.defaultColor"
      class="cursor-pointer"
    />
  </label>
</template>

<script setup lang="ts">

interface Props {
  icon: object;
  defaultColor?: string;
  checkedColor?: string;
  modelValue?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  defaultColor: 'fill-color_secondary',
  checkedColor: 'fill-color_primary',
  modelValue: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isChecked = computed({
  get() {
    return props.modelValue
  },
  set(isChecked) {
    emit('update:modelValue', isChecked)
  }
})

</script>