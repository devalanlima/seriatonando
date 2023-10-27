<template>
  <nav>
    <ul class="flex justify-between items-center gap-5">
      <li
        v-for="(route) in routes"
        :key="route.path"
      >
        <NuxtLink
          :key="route.path"
          :to="route.path"
        >
          <AtomsRouteBtn
            :is-selected="route.path === $route.path ? true : false"
            :icon="route.icon"
          >
            {{ route.name }}
          </AtomsRouteBtn>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import AtomsIconsFire from '../Atoms/Icons/AtomsIconsFire.vue';
import AtomsIconsFlag from '../Atoms/Icons/AtomsIconsFlag.vue';
import AtomsIconsHouse from '../Atoms/Icons/AtomsIconsHouse.vue';
import AtomsIconsEyeGlasses from '../Atoms/Icons/AtomsIconsEyeGlasses.vue';

const localPath = useLocalePath()

const routes = {
  home: {
    name: 'HOME',
    path: localPath('/'),
    icon: AtomsIconsHouse,
  },
  trending: {
    name: 'TRENDING',
    path: localPath('/trending'),
    icon: AtomsIconsFire,
  },
  popular: {
    name: 'UP COMING',
    path: localPath('/upcoming'),
    icon: AtomsIconsEyeGlasses,
  },
  watchlist: {
    name: 'WATCHLIST',
    path: localPath('/watchlist'),
    icon: AtomsIconsFlag,
  },
}
</script>