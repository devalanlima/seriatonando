<template>
  <div class="h-[100px] w-[30px] flex justify-center sticky left-0">
    <span class="-rotate-90 grid place-items-center">
      {{ props.title }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>
