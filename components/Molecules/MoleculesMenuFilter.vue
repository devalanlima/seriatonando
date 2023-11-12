<template>
  <div
    class="w-fit flex flex-col"
    v-auto-animate
  >
    <AtomsFilterBtn
      :title="props.btnTitle"
      v-model="isFilterOpen"
    />
    <LazyAtomsBaseCard
      color="bg-color_highlight"
      v-if="isFilterOpen"
      :class="['absolute flex flex-col top-14 z-20  shadow-md shadow-black/50', props.widthCard? props.widthCard: 'w-[300px] left-0']"
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
  widthCard?: string;
}

const props = defineProps<Props>()

onClickOutside(target, () => {
  setTimeout(() => {
    isFilterOpen.value = false
  }, 0);
})

</script>

<style scoped></style>