<template>
  <teleport to="body">
    <AtomsBaseCard
      class="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-color_highlight p-5 z-[51] border-2 border-color_primary flex flex-col gap-5 min-w-[100px] max-w-[365px] w-full "
      v-if="props.isOpen"
    >
      <p class="text-center">{{ props.label }}</p>
      <div class="flex justify-around gap-5">
        <button
          class="bg-color_primary w-full p-2 rounded-xl hover:bg-color_primary/50"
          @click="emit('confirm')"
        >Yes</button>
        <button
          class="bg-color_primary w-full p-2 rounded-xl hover:bg-color_primary/50"
          @click="emit('cancel')"
        >No</button>
      </div>
      <AtomsBackgroundBlur index="z-50" />
    </AtomsBaseCard>
  </teleport>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  isOpen: boolean;
}

const props = withDefaults(defineProps<Props>(),{
  label: "Confirm"
});

const emit = defineEmits(['confirm','cancel'])

</script>

<style scoped></style>