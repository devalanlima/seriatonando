<template>
  <div class="flex gap-2">
    <AtomsIconsSun
      :size="20"
      :color="$colorMode.preference === 'light' ? 'fill-color_primary' : 'fill-color_light'"
    />
    <AtomsSwitchButton
      v-model:value="atualTheme"
      v-if="!$colorMode.unknown"
      :key="renderKey"
    />
    <AtomsIconsMoon
      :size="20"
      :color="$colorMode.preference === 'dark' ? 'fill-color_primary' : 'fill-color_light'"
    />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const atualTheme = ref(true)

const renderKey = ref(0)
const checkTheme = ()=>{
  if (colorMode.preference === 'dark') {
    atualTheme.value = true
  } else {
    atualTheme.value = false
  }
  renderKey.value++
}

watch(() => colorMode.unknown, () => checkTheme())

watch(() => atualTheme.value, (newValue) => {
  if (newValue) {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
})

onMounted(() => {
  checkTheme()
})
</script>

<style scoped></style>