<template>
  <label
    :class="[`block w-[50px] h-[50px] relative cursor-pointer hover:opacity-100 rounded-lg after:items-center after:justify-center after:flex after:w-5 after:h-5 after:bg-color_primary after:absolute after:z-40 after:-right-1 after:-top-1 after:rounded-lg`,
      isChecked ? `opacity-100 outline outline- outline-color_primary after:content-['-'] after:pb-[2px] after:font-semibold` : `opacity-30 after:content-['+']`
    ]"
    :title="props.title"
  >
    <img
      class="rounded-lg overflow-hidden"
      :src="props.srcImage"
      :alt="props.altImage"
    >
    <input
      class="sr-only"
      type="checkbox"
      v-model="selectedValues"
      :value="props.inputValue"
    >
  </label>
</template>

<script setup lang="ts">

interface Props {
  title: string;
  srcImage: string;
  altImage: string;
  modelValue: Array<any>;
  inputValue: any;
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: typeof props.modelValue]
}>()

const selectedValues = computed({
  get() {
    return props.modelValue
  },
  set(selectedValues) {
    emit('update:modelValue', selectedValues)
  },
})

const isChecked = computed(()=>props.modelValue.includes(props.inputValue))
</script>
