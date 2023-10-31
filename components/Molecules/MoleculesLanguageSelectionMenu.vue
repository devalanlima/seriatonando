<template>
  <AtomsBaseCard
    class="h-fit flex flex-col py-0 px-0"
    color="bg-color_highlight"
  >
    <div v-if="atualLocale === locale ? true : false">
      <AtomsDivisionLine />
      <AtomsMiniSearchbar
        v-model="searchbarValue"
        class="rounded-e-none rounded-s-none"
      />
      <AtomsDivisionLine />
    </div>
    <ul
      class="flex flex-wrap justify-between gap-2 overflow-y-scroll max-h-[50vh] min-w-[180px] relative bg-inherit overflow-x-hidden w-full"
    >
      <template
        v-for="locale in localeCodes"
        :key="locale"
      >
        <li
          :class="atualLocale === locale ? '-order-1 sticky pr-2 top-0 bg-inherit flex gap-2 items-center justify-between w-full border-b-[1px] border-color_primary py-2 pointer-events-none cursor-default' : 'pr-2 w-[100px]'"
          v-if="searchbarValue.length === 0 || atualLocale === locale ? true : locale.toLowerCase().includes(searchbarValue.toLowerCase()) ? true : false"
        >
          <AtomsLanguageBtn
            :code="locale"
            :is-selected="atualLocale === locale ? true : false"
            @update-code="getAtualLocale"
          />
        </li>
      </template>
    </ul>
  </AtomsBaseCard>
</template>

<script setup lang="ts">

const { localeCodes, locale, setLocale, setLocaleCookie } = useI18n()

const searchbarValue = ref<string>('')

const atualLocale = ref<string>(locale.value)

const getAtualLocale = (e: string) => {
  atualLocale.value = e
}

watch(() => atualLocale.value, () => {
  setLocaleCookie(atualLocale.value)
  setLocale(atualLocale.value)
})
</script>

<style scoped></style>