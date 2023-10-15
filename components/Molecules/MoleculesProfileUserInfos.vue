<template>
  <div class="flex gap-5 justify-between">
    <AtomsIconsAvatar
      color="fill-color_primary"
      :size="50"
    />
    <div class="flex flex-col justify-between">
      <p class="text-xl">{{ props.name }}</p>
      <p class="text-color_secondary text-sm">{{ props.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  email: string;
  avatarUrl?: string;
}

const props = defineProps<Props>()
</script>