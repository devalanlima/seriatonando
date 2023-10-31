<template>
  <label
    class="flex h-full items-center w-full"
  >
    <AtomsIconsMagnifying
      class="cursor-pointer absolute"
      width="w-[13px]"
      stroke-color="stroke-color_primary"
      stroke-width="stroke-1"
    />
    <input
      type="text"
      v-model="searchbarValue"
      class="bg-transparent focus:outline-none pl-5 w-full"
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

const Props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const searchbarValue = computed({
  get(){
    return Props.modelValue
  },
  set(searchbarValue){
    emit('update:modelValue', searchbarValue)
  }
})
</script>
