<template>
  <label :class="[`text-3xl hover:text-color_primary font-bold relative after:absolute after:contents-[''] after:block  after:h-[4px] after:bg-color_primary cursor-pointer after:transition-all after:duration-150 after:ease-in-out after:rounded-full`,
  isChecked? 'text-color_primary after:w-full': 'after:w-0 text-color_secondary'
  ]">
    {{ props.title }}
    <slot/>
  </label>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  isChecked: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isChecked: false
});


const emit = defineEmits<{
  'update:isChecked': [value: boolean];
}>()

const isChecked = computed({
  get(){
    return props.isChecked
  },
  set(isChecked){
    emit('update:isChecked', isChecked)
  }
})
</script>
