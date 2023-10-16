<template>
  <nav>
    <ul class="flex justify-between gap-10 items-center p-5">
      <li>
        <NuxtLink to="/">
          <AtomsIconsSeriatonando aspect="" fill-color="fill-color_primary" />
        </NuxtLink>
      </li>
      <li class="mx-auto ml-0 w-full max-w-[650px]">
        <MoleculesNavRoutes />
      </li>
      <li
        class="relative"
        v-auto-animate
      >
        <AtomsAvatarBtn
          @action="toggleView"
          ref="avatarBtn"
        />
        <LazyOrganismsMenuCard
          ref="menuCard"
          v-if="isMenuOpen"
          class="absolute top-14 right-0"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menuCard = ref(null)
const isMenuOpen = ref<boolean>(false)

let debounced = false;
const toggleMenu = () => {
  if (!debounced) {
    debounced = true;
    isMenuOpen.value ? isMenuOpen.value = false : isMenuOpen.value = true;
    setTimeout(function () {
      debounced = false;
    }, 100);
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