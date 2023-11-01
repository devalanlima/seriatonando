<template>
  <label class="flex flex-col gap-1 w-full">
    <p>{{ props.label }}</p>
    <div class="relative flex items-center">
      <component
        class="absolute left-2 cursor-pointer"
        :is="props.icon"
        width="w-5"
        stroke-color="stroke-color_primary"
        stroke-width="stroke-1"
      />
      <input
        v-model="inputValue"
        type="text"
        :placeholder="props.placeholder"
        class="w-full p-2 bg-transparent outline outline-1 outline-color_primary rounded-lg focus:outline-2 focus:bg-color_primary/10 pl-9 placeholder:text-color_secondary/70 dark:text-color_light text-color_terciary"
      >
    </div>
  </label>
</template>

<script setup lang="ts">
import AtomsIconsMagnifying from './Icons/AtomsIconsMagnifying.vue';

interface Props {
  label?: string;
  placeholder?: string;
  modelValue?: string;
  icon?: typeof AtomsIconsMagnifying;
}

const props = withDefaults(defineProps<Props>(), {
  icon: AtomsIconsMagnifying,
  modelValue: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(inputValue) {
    emit('update:modelValue', inputValue)
  },
})
</script>