<template>
  <label
    class="flex h-fit items-center w-full relative rounded-lg overflow-hidden"
  >
    <AtomsIconsMagnifying
      class="cursor-pointer absolute left-2"
      width="w-[18px]"
      stroke-color="stroke-color_primary"
      stroke-width="stroke-2"
    />
    <input
      type="text"
      v-model="searchbarValue"
      class="pl-8 p-2 w-full focus:outline-none bg-transparent focus:bg-color_primary/10 placeholder:text-color_secondary"
      :placeholder="props.placeholder"
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder?: string;
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const searchbarValue = computed({
  get(){
    return props.modelValue
  },
  set(searchbarValue){
    emit('update:modelValue', searchbarValue)
  }
})

onMounted(()=>{
  searchbarValue.value = ""
})
</script>
