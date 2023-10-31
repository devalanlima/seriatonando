<template>
  <button @click="emit('updateCode', props.code)" :class="['flex gap-1 cursor-pointer w-fit', 
  isSelected? 'text-color_primary font-bold': 'text-color_light'
]">
    <AtomsCountryFlag
      class="w-5"
      :country-code="props.code"
    />
    <p class="text-inherit text-sm whitespace-nowrap">{{ props.code }}</p>
  </button>
</template>

<script setup lang="ts">
interface Props {
  code: string;
  isSelected: boolean;
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:isSelected': [value: typeof props.isSelected],
  'updateCode': [value: any]
}>()

const isSelected = computed({
  get(){
    return props.isSelected
  },
  set(isSelected){
    emit('update:isSelected', isSelected)
  },
})
</script>
