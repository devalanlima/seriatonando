<template>
  <div :class="[props.fillColor, props.strokeColor, props.strokeWidth, props.width, props.height, props.aspect]">
    <svg
      width="100%"
      height="100%"
      viewBox="-1 0 18 15"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M13.751 7.12578C13.751 10.7849 10.7847 13.7513 7.1255 13.7513C3.46633 13.7513 0.5 10.7849 0.5 7.12578C0.5 3.46661 3.46633 0.500275 7.1255 0.500275C10.7847 0.500275 13.751 3.46661 13.751 7.12578Z"
      />
      <path
        d="M14.476 14.4997C14.4728 14.4997 14.4687 14.499 14.4651 14.4975C14.4631 14.4967 14.462 14.496 14.4617 14.4958L13.0673 13.1014C13.0651 13.0992 13.0642 13.0975 13.0635 13.0959C13.0627 13.0939 13.0619 13.0908 13.0619 13.0866C13.0619 13.0796 13.064 13.0717 13.0701 13.0638C13.071 13.0631 13.0719 13.0627 13.0728 13.0623C13.0748 13.0615 13.0779 13.0607 13.0821 13.0607C13.0899 13.0607 13.0988 13.0633 13.1075 13.071L14.4974 14.4609C14.4995 14.4631 14.5005 14.4648 14.5012 14.4664C14.502 14.4684 14.5028 14.4715 14.5028 14.4757C14.5028 14.4809 14.5016 14.4866 14.4985 14.4925C14.4887 14.4982 14.4803 14.4997 14.476 14.4997Z"
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