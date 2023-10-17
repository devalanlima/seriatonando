<template>
  <label class="text-color_primary h-12 mb-[6px] flex flex-col relative justify-center cursor-text">
    <slot name="Label">
      <p class="-top-[35px] font-semibold absolute" v-if="props.label">{{ props.label }}</p>
    </slot>
    <div class="stroke-white fill-white z-10 px-2 w-fit cursor-pointer hover:scale-110">
      <slot name="icon">
        <AtomsIconsMagnifying
          width="w-5"
          stroke-color="stroke-white"
          stroke-width="stroke-1"
        />
      </slot>
    </div>
    <input
      type="search"
      :placeholder="props.placeholder"
      v-model="value"
      class="absolute z-0 outline-none border-b-[1px] focus:border-b-2 box-decoration-slice bg-gradient-to-r from-color_primary/50 focus:from-color_primary to-transparent border-color_primary bg-transparent text-white p-4 pb-3 placeholder:text-white/80 pl-9 w-full"
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  placeholder?: string;
  value: string;
}

const props = withDefaults(defineProps<Props>(),{
  value: '',
})

const value = UseDebouncedRef(props.value)

const emit = defineEmits<{
  'update:value': [value: string],
}>()

watch(()=>value.value,()=>{
  emit('update:value', value.value)
})


</script>
