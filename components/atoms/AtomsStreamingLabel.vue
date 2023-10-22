<template>
  <label
    :class="[`block w-[50px] h-[50px] relative cursor-pointer hover:opacity-100 rounded-lg after:items-center after:justify-center after:flex after:w-5 after:h-5 after:bg-color_primary after:absolute after:z-40 after:-right-1 after:-top-1 after:rounded-lg`,
      isChecked ? `opacity-100 outline outline- outline-color_primary after:content-['-'] after:pb-[2px] after:font-semibold` : `opacity-30 after:content-['+']`
    ]"
    :title="props.title"
  >
    <img
      class="rounded-lg overflow-hidden"
      :src="props.srcImage"
      :alt="props.altImage"
    >
    <slot/>
  </label>
</template>

<script setup lang="ts">

const isChecked = computed(()=>{
  return props.isChecked
})
interface Props {
  title: string;
  srcImage: string;
  altImage: string;
  isChecked: boolean
}

const props = defineProps<Props>()


</script>
