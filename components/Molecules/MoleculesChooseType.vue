<template>
  <div class="flex gap-5">
    <AtomsChooseTypeBtn
      v-if="tmdbFiltersStore.showType === 'movies' || tmdbFiltersStore.showType === 'all'"
      label="Movies"
      v-model="selectedValue"
      value="movies"
    />
    <AtomsChooseTypeBtn
      v-if="tmdbFiltersStore.showType === 'tv' || tmdbFiltersStore.showType === 'all'"
      label="Series"
      v-model="selectedValue"
      value="tv"
    />
  </div>
</template>

<script setup lang="ts">
const tmdbFiltersStore = useTMDBFiltersStore();

interface Props {
  modelValue: ShowType;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  "update:modelValue": [value: typeof props.modelValue];
}>();

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(selectedValue) {
    emit("update:modelValue", selectedValue)
  }
})

const setSelectedValue = () => {
  if (tmdbFiltersStore.showType === 'movies') {
    emit("update:modelValue", 'movies')
  } else if (tmdbFiltersStore.showType === 'tv') {
    emit("update:modelValue", 'tv')
  } else if (tmdbFiltersStore.showType === 'all'){
    emit("update:modelValue", props.modelValue)
  }
}

watch(() => tmdbFiltersStore.showType, () => setSelectedValue());

onMounted(()=>setSelectedValue());

</script>

<style scoped></style>