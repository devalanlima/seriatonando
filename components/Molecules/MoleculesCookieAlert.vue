<template>
  <div
    v-if="showAlert"
    class="fixed outline outline-2 outline-color_primary w-full flex flex-col md:flex-row px-5 md:px-24 gap-5 z-50 bottom-0 left-1/2 -translate-x-1/2 justify-around items-center bg-color_highlight py-5"
  >
    <p class="text-color_dark dark:text-color_light text-justify max-w-[800px]">Este website coleta informações do seu
      dispositivo e da sua navegação por meio de cookies para permitir funcionalidades, como melhorar o funcionamento
      técnico das páginas e armazenar suas preferencias de escolhas.</p>
    <AtomsDialogBtn
      class="w-full md:w-[200px]"
      label="Accept"
      @action="accept"
    />
  </div>
</template>

<script setup lang="ts">
const cookieAccept = useCookie<boolean>('accept_use_cookie');

const showAlert = ref(false);

if (cookieAccept.value === null || cookieAccept.value === undefined) {
  showAlert.value = true;
} else {
  showAlert.value = !cookieAccept.value;
}

const accept = () => {
  cookieAccept.value = true;
  showAlert.value = false;
}
</script>

<style scoped></style>