<template>
    <iframe
      class="border-color_primary aspect-video"
      width="100%"
      height="100%"
      :src="`https://www.youtube.com/embed/${props.videoKey}?${props.videoId}`"
      :title="props.title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  videoKey: string;
  videoId: string;
}

const props = defineProps<Props>();
</script>
