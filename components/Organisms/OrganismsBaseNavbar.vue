<template>
  <nav id="organismBaseNavBar">
    <ul class="flex justify-between flex-wrap xl:flex-nowrap gap-5 md:gap-x-7 lg:gap-x-10 items-center">
      <li class="md:order-1 md:w-full grow w-[200px] md:min-w-[150px] max-w-[300px] md:basis-0">
        <NuxtLink to="/">
          <AtomsIconsSeriatonando
            aspect=""
            fill-color="fill-color_primary"
          />
        </NuxtLink>
      </li>

      <li
        class="relative h-12 md:order-3 lg:order-4"
        v-auto-animate
      >
        <AtomsAvatarBtn
          @action="toggleView"
          ref="avatarBtn"
        />
        <LazyOrganismsMenuCard
          ref="menuCard"
          v-if="isMenuOpen"
          class="absolute top-14 right-0 md:-right-48 lg:right-0"
        />
      </li>

      <li class="w-full md:order-4 md:max-w-[360px] md:mx-auto md:ml-0 md:basis-1/2 xl:basis-1/2 lg:order-3 xl:mr-0">
        <AtomsSearchbar
          v-model="searchbarValue"
          placeholder="Search..."
        />
      </li>

      <li class="w-full xl:max-w-[560px] md:order-2 md:basis-3/4 md:mx-auto xl:basis-2/3 xl:ml-0">
        <MoleculesNavRoutes />
      </li>

    </ul>
  </nav>
</template>

<script setup lang="ts">
const menuCard = ref(null)
const isMenuOpen = ref<boolean>(false)
const searchbarValue = ref<string>()

let debounced = false;
const toggleMenu = () => {
  if (!debounced) {
    debounced = true;
    isMenuOpen.value ? isMenuOpen.value = false : isMenuOpen.value = true;
    setTimeout(function () {
      debounced = false;
    }, 0);
  }
}

const toggleView = () => {
  toggleMenu()
}

onClickOutside(menuCard, () => {
  toggleMenu()
})

</script>

<style scoped></style>