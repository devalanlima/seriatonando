<template>
  <NuxtLoadingIndicator
    :throttle="0"
    color="#E71270"
  />
  <header class="p-5">
    <OrganismsBaseNavbar />
  </header>
  <main class="md:px-5 flex flex-col gap-5">
    <div class="flex px-5 md:px-0 gap-5 w-full items-center">
      <MoleculesShowTypeFilter />
      <OrganismsProvidersSelection
        v-if="$route.fullPath.split('/')[$route.fullPath.split('/').length - 1] !== 'trending'" />
    </div>
    <OrganismsFilters
      class="px-5 md:px-0"
      v-if="$route.fullPath.split('/')[$route.fullPath.split('/').length - 1] !== 'trending'"
    />
    <slot></slot>
  </main>
  <AtomsScrollToTopButton/>
</template>

<script setup lang="ts">
</script>