<template>
  <div :class="[props.fillColor, props.strokeColor, props.strokeWidth, props.width, props.height, props.aspect]">
    <svg
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
    >
      <path
        d="M12.7254 0.666668H5.74208C2.70875 0.666668 0.900414 2.475 0.900414 5.50833V12.4833C0.900414 15.525 2.70875 17.3333 5.74208 17.3333H12.7171C15.7504 17.3333 17.5587 15.525 17.5587 12.4917V5.50833C17.5671 2.475 15.7587 0.666668 12.7254 0.666668ZM6.31708 4.31667C7.17541 4.31667 7.88375 5.01667 7.88375 5.88333C7.88375 6.75 7.18375 7.45 6.31708 7.45C5.45041 7.45 4.75041 6.73333 4.75041 5.875C4.75041 5.01667 5.45875 4.31667 6.31708 4.31667ZM9.23375 14.9C6.99208 14.9 5.16708 13.075 5.16708 10.8333C5.16708 10.25 5.64208 9.76667 6.22541 9.76667H12.2254C12.8087 9.76667 13.2837 10.2417 13.2837 10.8333C13.3004 13.075 11.4754 14.9 9.23375 14.9ZM12.1504 7.43333C11.2921 7.43333 10.5837 6.73333 10.5837 5.86667C10.5837 5 11.2837 4.3 12.1504 4.3C13.0171 4.3 13.7171 5 13.7171 5.86667C13.7171 6.73333 13.0087 7.43333 12.1504 7.43333Z"
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