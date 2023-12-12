<template>
  <button
    class="fixed bottom-10 right-10 z-50"
    @click="scrollTop"
    v-if="showButton"
  >
    <div
      class=" w-12 h-12 bg-color_primary opacity-50 hover:opacity-100 block rounded-full animate-bounce transition-opacity duration-500 ease-in-out"
    >
      <AtomsIconsArrow
        class="rotate-180"
        fill-color="fill-color_highlight"
      />
    </div>
  </button>
</template>

<script setup lang="ts">
const { x, y } = useWindowScroll()
const { height } = useWindowSize()

const showButton = computed(()=>{
  if (y.value > height.value) {
    return true;
  } else {
    return false;
  }
})

const scrollTop = () => {
  window.scrollTo(x.value, 0)
}
</script>
