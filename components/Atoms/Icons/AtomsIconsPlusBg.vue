<template>
  <div :class="[props.fillColor, props.strokeColor, props.strokeWidth, props.width, props.height, props.aspect]">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.4927 0H14.5322C5.4277 0 0 5.425 0 14.525V35.45C0 44.575 5.4277 50 14.5322 50H35.4677C44.5722 50 49.9999 44.575 49.9999 35.475V14.525C50.0249 5.425 44.5972 0 35.4927 0ZM35.0174 26.875H26.8884V35C26.8884 36.025 26.038 36.875 25.0125 36.875C23.987 36.875 23.1365 36.025 23.1365 35V26.875H15.0075C13.982 26.875 13.1315 26.025 13.1315 25C13.1315 23.975 13.982 23.125 15.0075 23.125H23.1365V15C23.1365 13.975 23.987 13.125 25.0125 13.125C26.038 13.125 26.8884 13.975 26.8884 15V23.125H35.0174C36.043 23.125 36.8934 23.975 36.8934 25C36.8934 26.025 36.043 26.875 35.0174 26.875Z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: string;
  width?: string;
  height?: string;
  aspect?: string;
}

const props = withDefaults(defineProps<Props>(), {
  fillColor: 'fill-neutral-500',
  strokeColor: 'stroke-red-300',
  aspect: 'aspect-square',
  strokeWidth: 'stroke-0'
})
</script>