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
      <OrganismsProvidersSelection />
    </div>
    <OrganismsFilters class="px-5 md:px-0" />

    <div class="grid grid-cols-[repeat(auto-fit,_minmax(375px,_1fr))] place-items-center gap-5">
      <slot></slot>
    </div>
</main></template>