<template>
  <label class="w-fit rounded-md bg-color_primary cursor-pointer">
    <AtomsIconsCross
      width="w-5"
      stroke-width="stroke-2"
      fill-color="fill-color_terciary"
      stroke-color="stroke-color_terciary"
    />
    <input type="checkbox" class="sr-only" v-model="isChecked">
  </label>
</template>

<script setup lang="ts">

const isChecked = computed({
  get(){
    return props.modelValue
  },
  set(isChecked){
    emit('update:modelValue', isChecked)
  }
})

interface Props {
  modelValue: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

</script>

<style scoped></style>