<template>
  <div :class="[props.fillColor, props.strokeColor, props.strokeWidth, props.width, props.height, props.aspect]">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 28 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.26043 8.1953L11.441 0.856133C12.8585 -0.28316 15.1503 -0.28316 16.5546 0.842885L25.7352 8.1953C26.7685 9.01665 27.4309 10.752 27.2057 12.0503L25.4437 22.5954C25.1258 24.4765 23.3241 26 21.4165 26H6.57914C4.68474 26 2.86982 24.4633 2.55188 22.5954L0.789948 12.0503C0.577986 10.752 1.24036 9.01665 2.26043 8.1953ZM13.9978 17.6408C15.826 17.6408 17.3097 16.157 17.3097 14.3289C17.3097 12.5007 15.826 11.017 13.9978 11.017C12.1696 11.017 10.6859 12.5007 10.6859 14.3289C10.6859 16.157 12.1696 17.6408 13.9978 17.6408Z"
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