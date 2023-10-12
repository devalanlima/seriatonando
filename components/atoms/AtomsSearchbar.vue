<template>
  <label class="text-color_primary flex flex-col relative justify-center max-w-[500px] cursor-text">
    <slot name="Label">
      <p class="-top-[28px] font-semibold absolute">{{ props.label }}</p>
    </slot>
    <div class="stroke-white fill-white z-10 px-2 w-fit cursor-pointer hover:scale-110">
      <slot name="icon">
        <AtomsIconsMagnifying
          :size="20"
          class="stroke-white"
        />
      </slot>
    </div>
    <input
      type="search"
      :placeholder="props.placeholder"
      v-model="outputValue"
      class="absolute z-0 outline-none border-b-[1px] focus:border-b-2 box-decoration-slice bg-gradient-to-r from-[rgb(var(--color-primary)_/_.5)] focus:from-color_primary to-transparent border-color_primary bg-transparent text-color_light p-4 pb-3 placeholder:text-[rgb(var(--color-light)_/_.8)] pl-9 w-full "
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  placeholder: string;
}

const props = defineProps<Props>()

const outputValue = UseDebouncedRef('')

const emit = defineEmits(['output'])

watch(()=>outputValue.value,()=>{
  emit('output', outputValue.value)
})

</script>
