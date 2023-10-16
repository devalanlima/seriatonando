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

const routes = {
  home: {
    name: 'HOME',
    path: '/',
    icon: AtomsIconsHouse,
  },
  trending: {
    name: 'TRENDING',
    path: '/trending',
    icon: AtomsIconsFire,
  },
  popular: {
    name: 'UP COMING',
    path: '/upcoming',
    icon: AtomsIconsEyeGlasses,
  },
  watchlist: {
    name: 'WATCHLIST',
    path: '/watchlist',
    icon: AtomsIconsFlag,
  },
}
</script>