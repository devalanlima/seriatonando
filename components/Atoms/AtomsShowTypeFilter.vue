<template>
  <label :class="[`text-3xl hover:text-color_primary font-bold relative after:absolute after:contents-[''] after:block  after:h-[4px] after:bg-color_primary cursor-pointer after:transition-all after:duration-150 after:ease-in-out after:rounded-full`,
    isChecked ? 'text-color_primary after:w-full' : 'after:w-0 text-color_secondary'
  ]" :title="props.title">
    {{ props.name }}
    <input
      type="radio"
      :value="props.value"
      v-model="selectedShowType"
      class="sr-only"
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  name: string;
  value: string;
  modelValue: string;
}

const emit = defineEmits<{
  'update:modelValue': [value: typeof props.modelValue]
}>()

const props = defineProps<Props>()

const isChecked = computed(()=> props.modelValue === props.value)

const selectedShowType = computed<typeof props.modelValue>({
  get() {
    return props.modelValue
  },
  set(selectedShowType) {
    emit("update:modelValue", selectedShowType)
  }
})
</script>
