<template>
  <div :class="[props.fillColor, props.strokeColor, props.strokeWidth, props.width, props.height, props.aspect]">
    <svg
    width="100%"
    height="100%"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.53 2.982C26.124 2.394 25.606 1.876 25.018 1.47C23.688 0.504 21.952 0 19.866 0H8.134C7.854 0 7.574 0.014 7.308 0.042C2.716 0.336 0 3.318 0 8.134V19.866C0 21.952 0.504 23.688 1.47 25.018C1.876 25.606 2.394 26.124 2.982 26.53C4.13 27.37 5.586 27.86 7.308 27.972C7.574 27.986 7.854 28 8.134 28H19.866C24.962 28 28 24.962 28 19.866V8.134C28 6.048 27.496 4.312 26.53 2.982ZM9.044 12.152L8.358 11.438C7.994 11.074 7.7 10.416 7.7 9.968V8.288C7.7 7.406 8.358 6.748 9.17 6.748H12.166C12.74 6.748 13.09 7.378 12.782 7.868L10.192 12.04C9.94 12.446 9.366 12.502 9.044 12.152ZM20.3 9.828C20.3 10.416 19.936 11.144 19.572 11.508L16.422 14.294C15.988 14.658 15.694 15.386 15.694 15.974V19.124C15.694 19.558 15.4 20.146 15.036 20.37L14 21.028C13.048 21.616 11.732 20.958 11.732 19.782V15.904C11.732 15.386 11.438 14.728 11.144 14.364L10.808 14C10.584 13.762 10.542 13.398 10.71 13.104L14.462 7.084C14.602 6.874 14.826 6.734 15.078 6.734H18.83C19.642 6.734 20.3 7.392 20.3 8.204V9.828Z"
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