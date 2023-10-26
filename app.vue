<template>
  <header class="p-5">
    <OrganismsBaseNavbar />
  </header>
  <main class="md:px-5 flex flex-col gap-5">
    <div class="flex gap-5 w-full">
      <MoleculesShowTypeFilter/>
      <MoleculesProvidersSelection/>
    </div>
    <OrganismsFilters class="px-5 md:px-0"/>
    <NuxtPage />
  </main>
</template>

<script setup>
</script>
