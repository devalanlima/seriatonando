<template>
  <label class="w-fit h-fit">
    <span class="sr-only">Switch Button</span>
    <input
      type="checkbox"
      class="sr-only"
      v-model="isChecked"
    >
    <div class="bg-color_primary/50 w-10 h-fit rounded-full outline outline-4 outline-color_primary/50 cursor-pointer">
      <div :class="['block w-5 h-5 bg-color_primary rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:outline hover:outline-8 outline-color_primary hover:outline-color_primary/25',
        isChecked ? 'translate-x-5' : ''
      ]"></div>
    </div>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

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