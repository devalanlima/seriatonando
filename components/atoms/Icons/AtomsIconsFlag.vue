<template>
  <div class='fill-neutral-500'>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      viewBox="0 0 367.000000 340.000000"
      preserveAspectRatio="xMidYMid meet"
    >

      <g
        transform="translate(0.000000,340.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path d="M125 3385 c-113 -40 -150 -173 -72 -262 46 -53 80 -63 207 -63 l110
0 0 -1192 c0 -701 4 -1242 10 -1313 22 -267 106 -432 256 -506 149 -74 316
-38 514 109 41 31 167 147 280 258 227 224 255 243 371 252 72 5 159 -15 219
-51 19 -11 130 -113 245 -227 246 -241 333 -308 469 -357 107 -38 223 -35 307
7 94 48 176 173 221 335 l23 80 3 1303 3 1302 115 0 c131 0 164 10 211 63 80
91 36 233 -82 266 -29 8 -520 11 -1705 11 -1409 -1 -1671 -3 -1705 -15z" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 100,
})
</script>