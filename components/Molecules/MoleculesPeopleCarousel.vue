<template>
  <ol class="flex overflow-x-auto max-w-full gap-5">
    <template v-for="(people, index) in props.people">
      <li v-if="index <= loadMore">
        <AtomsPeopleCard
          :name="people.name"
          :role="people.role"
          :path="people.picture"
        />
      </li>
    </template>
    <li
      v-if="loadMore <= props.people.length"
      class="max-h-[225px] min-w-[150px]  grid place-items-center underline underline-offset-2 text-color_primary font-semibold hover:bg-color_primary/10"
    >
      <button
        @click="loadMore = loadMore + 10"
        class="w-full h-full block"
      >Load More</button>
    </li>
  </ol>
</template>

<script setup lang="ts">
interface Props {
  people: Array<People>;
}
const loadMore = ref(10)
const props = defineProps<Props>();
</script>
