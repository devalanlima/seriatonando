<template>
  <div class="flex flex-col gap-2">
    <img
      class="min-w-[150px] h-[225px]"
      :src="props.path !== null ? `https://image.tmdb.org/t/p/original${props.path}` : 'https://via.placeholder.com/150x225'"
      alt=""
    >
    <div>
      <p class="text-color_primary font-semibold">{{ props.name }}</p>
      <p class="text-sm text-color_secondary">{{ props.role }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  role: string;
  path: string | null;
}
const props = defineProps<Props>();
</script>
