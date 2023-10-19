<template>
  <div class="flex bg-color_light p-1 gap-[3px] rounded-lg h-fit w-fit">
    <AtomsAvaliationBtn
      :icon="AtomsIconsEmojiSad"
      default-color="fill-color_terciary"
      checked-color="fill-color_danger"
      v-model="bad"
    />
    <span class="block h-6 w-[2px] bg-color_terciary rounded-full"></span>
    <AtomsAvaliationBtn
      :icon="AtomsIconsEmojiNeutral"
      default-color="fill-color_terciary"
      checked-color="fill-color_neutral"
      v-model="neutral"
    />
    <span class="block h-6 w-[2px] bg-color_terciary rounded-full"></span>
    <AtomsAvaliationBtn
      :icon="AtomsIconsEmojiHappy"
      default-color="fill-color_terciary"
      checked-color="fill-color_success"
      v-model="good"
    />
  </div>
</template>

<script setup lang="ts">
import AtomsIconsEmojiNeutral from '../Atoms/Icons/AtomsIconsEmojiNeutral.vue'
import AtomsIconsEmojiSad from '../Atoms/Icons/AtomsIconsEmojiSad.vue'
import AtomsIconsEmojiHappy from '../Atoms/Icons/AtomsIconsEmojiHappy.vue'

const bad = ref<boolean>(false)
const neutral = ref<boolean>(false)
const good = ref<boolean>(false)

watch(()=>bad.value, (newValue)=>{
  if (newValue) {
    good.value = neutral.value = false
    //post
  }
})

watch(()=>neutral.value, (newValue)=>{
  if (newValue) {
    good.value = bad.value = false
    //post
  }
})

watch(()=>good.value, (newValue)=>{
  if (newValue) {
    neutral.value = bad.value = false
    //post
  }
})

</script>

<style scoped></style>