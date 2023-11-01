<template>
  <div :class="[props.fillColor, props.strokeColor, props.strokeWidth, props.width, props.height, props.aspect]">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 512.000000 542.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,542.000000) scale(0.100000,-0.100000)"
      >
        <path
        d="M1795 5213 c-475 -11 -832 -63 -1042 -152 -310 -132 -498 -366 -592
    -736 -28 -110 -58 -328 -73 -530 -18 -240 -18 -1932 0 -2170 31 -409 77 -618
    180 -819 163 -318 441 -488 910 -555 246 -36 416 -43 1197 -48 1402 -10 1752
    22 2090 187 299 145 470 387 551 779 61 300 78 715 71 1751 -5 744 -11 905
    -43 1155 -61 489 -240 788 -569 953 -229 114 -507 162 -1047 182 -237 8 -1312
    11 -1633 3z m177 -1324 c180 -60 295 -210 306 -398 10 -180 -72 -332 -228
    -424 -165 -96 -381 -69 -529 69 -204 189 -184 525 40 690 114 83 277 108 411
    63z m1560 -22 c179 -88 282 -282 250 -472 -45 -272 -316 -445 -574 -365 -269
    83 -398 372 -279 626 51 110 145 194 266 237 39 13 74 17 156 15 99 -3 110 -5
    181 -41z m-89 -2010 c21 -16 47 -47 58 -69 43 -85 5 -204 -81 -248 -38 -20
    -56 -20 -843 -20 l-803 0 -46 29 c-80 51 -109 150 -69 236 20 44 41 66 86 89
    27 14 120 16 846 14 l816 -3 36 -28z" />
    </g>
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