<template>
  <ul>
    <li
      v-for="item in props.items"
      :key="item.id"
      @click="item.isOpen = true"
    >
      <slot :name="item.id">
        <div class="hover:bg-color_primary/50 py-3 px-0 pl-7 box-border cursor-pointer">
          {{ item.name }}
        </div>
      </slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Item {
  id: number;
  name: string;
  isOpen: boolean;
}

interface Props {
  items: Array<Item>;
}

const props = defineProps<Props>()
</script>
