<template>
  <label class="w-fit h-fit cursor-pointer" :title="props?.title">
    <span class="sr-only">{{ props?.title }}</span>
    <input
      type="checkbox"
      class="peer sr-only"
      v-model="isChecked"
      :value="props.inputValue"
    >
    <div :class="['rounded-md border-2 h-fit w-fit cursor-pointer', isChecked? 'bg-color_primary  border-color_primary' : 'bg-color_secondary border-color_secondary']">
      <AtomsIconsChecked
      :stroke-color="isChecked? 'stroke-color_light' : 'stroke-color_terciary'"
      width="w-5"
      />
    </div>
  </label>
</template>

<script setup lang="ts">

interface Props {
  modelValue?: Array<any> | boolean;
  title?: string;
  inputValue?: any;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})


const emit = defineEmits<{
  'update:modelValue': [value: typeof props.modelValue];
}>()

const isChecked = computed({
  get() {
    return props.modelValue;
  },
  set(isChecked) {
    emit('update:modelValue', isChecked);
  }
})

</script>