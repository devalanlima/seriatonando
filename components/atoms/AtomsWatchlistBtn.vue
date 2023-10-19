<template>
  <label class="w-fit h-fit cursor-pointer" :title="props?.title">
    <span class="sr-only">{{ props?.title }}</span>
    <input
      type="checkbox"
      class="sr-only"
      v-model="isChecked"
    >
    <AtomsIconsFlag
    width="w-8"
    :fill-color="isChecked? 'fill-color_primary': 'fill-color_secondary'"
    />
  </label>

</template>

<script setup lang="ts">
interface Props {
  modelValue?: boolean;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})


const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>()

const isChecked = computed({
  get() {
    return props.modelValue;
  },
  set(isChecked) {
    emit('update:modelValue', isChecked);
  }
})
</script>