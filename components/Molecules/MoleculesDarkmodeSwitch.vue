<template>
  <div class="flex gap-2">
    <AtomsIconsSun
      :size="20"
      :color="colorMode.value === 'light'? 'fill-color_primary': 'fill-color_light'"
    />
    <AtomsSwitchButton
      v-model:value="atualTheme"
    />
    <AtomsIconsMoon
      :size="20"
      :color="colorMode.value === 'dark'? 'fill-color_primary': 'fill-color_light'"
    />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const themeCookie = useCookie("theme")

const atualTheme = ref<boolean>(colorMode.value === 'dark'? true: false)

watch(()=>atualTheme.value, (newValue)=>{
  if (newValue) {
    colorMode.value = 'dark'
    themeCookie.value = 'dark'
  } else {
    colorMode.value = 'light'
    themeCookie.value = 'light'
  }
})
</script>

<style scoped></style>