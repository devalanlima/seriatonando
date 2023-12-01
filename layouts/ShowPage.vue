<template>
  <NuxtLoadingIndicator
    :throttle="0"
    color="#E71270"
  />
  <header class="p-5">
    <OrganismsBaseNavbar />
  </header>
  <main class="md:px-5 flex flex-col gap-5">
    
    <slot></slot>
  </main>
</template>