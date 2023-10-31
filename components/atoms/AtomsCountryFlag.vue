<template>
  <div>
    <img class="aspect-square" :src="path" :alt="`${regionCode} Flag`">
  </div>
</template>

<script setup lang="ts">

interface Props {
  countryCode: string;
}

const props = defineProps<Props>();

const regionCode = computed(() => {
  if (props.countryCode.length > 2) {
    return props.countryCode.split('-')[1].toUpperCase();
  } else {
    return props.countryCode.toUpperCase();
  }
});

const path = computed(()=> `/countryFlags/${regionCode.value}.svg`)

</script>

<!-- flags SVG : https://github.com/hampusborgos/country-flags/tree/main -->
