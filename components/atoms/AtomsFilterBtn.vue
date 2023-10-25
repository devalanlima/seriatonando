<template>
  <label
    class="w-fit cursor-pointer"
  >
    <AtomsBaseCard
      color="bg-color_highlight"
      class="w-fit overflow-hidden flex gap-3"
    >
      {{ props.title }}
      <AtomsIconsArrow
        class="transition-all duration-500 ease-in-out"
        :style="isChecked ? rotateArrow : ''"
        width="w-5"
        fill-color="fill-color_light"
      />
    </AtomsBaseCard>
    <input type="checkbox" class="sr-only" v-model="isChecked">
  </label>
</template>

<script setup lang="ts">

interface Props {
  modelValue: boolean;
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isChecked = computed({
  get(){
    return props.modelValue
  },
  set(isChecked){
    emit('update:modelValue', isChecked)
  }
})

const rotateArrow = computed(() => ({
  transform: 'rotate(180deg)'
}))
</script>
