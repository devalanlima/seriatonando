<template>
  <div class="flex gap-2">
    <AtomsIconsSun
      width="w-5"
      :fill-color="$colorMode.preference === 'light' ? 'fill-color_primary' : 'fill-color_light'"
    />
    <AtomsSwitchButton v-model="atualTheme" />
    <AtomsIconsMoon
      width="w-5"
      :fill-color="$colorMode.preference === 'dark' ? 'fill-color_primary' : 'fill-color_light'"
    />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const atualTheme = ref(true)

watch(() => atualTheme.value, (newValue) => {
  newValue ? colorMode.preference = 'dark' : colorMode.preference = 'light'
})

onMounted(() => {
  if (colorMode.preference === 'dark') {
    atualTheme.value = true
  } else if (colorMode.preference === 'light') {
    atualTheme.value = false
  }
})
</script>

<style scoped></style>