<template>
  <div
    class="w-fit flex flex-col relative"
    v-auto-animate
  >
    <AtomsFilterBtn
      :title="props.btnTitle"
      v-model="isFilterOpen"
    />
    <LazyAtomsBaseCard
      color="bg-color_highlight"
      v-if="isFilterOpen"
      class="absolute w-[300px] flex flex-col top-14 left-0 z-20 overflow-hidden shadow-md shadow-black/50"
      ref="target"
    >
      <slot/>
    </LazyAtomsBaseCard>
  </div>
</template>

<script setup lang="ts">
const isFilterOpen = ref<boolean>(false)

const target = ref(null)

interface Props {
  btnTitle: string;
}

const props = defineProps<Props>()

onClickOutside(target, () => {
  setTimeout(() => {
    isFilterOpen.value = false
  }, 0);
})

</script>

<style scoped></style>