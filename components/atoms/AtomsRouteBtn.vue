<template>
  <div class="testando flex items-center gap-1 relative group">
    <component
      :class="['component-route fill-color_secondary w-6',
    props.isSelected? 'component-route-selected': 'component-route'
    ]"
      :is="props.icon"
    />
    <p :class="['text-lg font-semibold relative',
    props.isSelected? 'text-route-selected': 'text-route'
  ]"><slot/>
    </p>
  </div>
</template>

<script setup lang="ts">

interface Props {
  icon: object;
  isSelected?: boolean;
}

const props = defineProps<Props>()

</script>

<style scoped>
.component-route{
  @apply fill-color_secondary group-hover:fill-color_primary !important;
}
.component-route-selected{
  @apply fill-color_primary group-hover:fill-color_primary !important; 
}
.text-route{
  @apply text-color_secondary group-hover:text-color_primary !important; 
}
.text-route-selected{
  @apply text-color_primary group-hover:text-color_primary !important; 
}
</style>