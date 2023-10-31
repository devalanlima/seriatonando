<template>
  <AtomsBaseCard
    color="bg-color_highlight"
    class="flex w-fit min-w-[250px] flex-col gap-2 z-50 shadow-xl shadow-black/30 border-[1px] border-black border-opacity-25"
  >
    <LazyMoleculesProfileUserInfos
      :name="userInfos.name"
      :email="userInfos.email"
    />
    <LazyMoleculesMenuOptions
      class="-mx-4"
      :items="items"
    >
      <template #1>
        <div class="relative" v-auto-animate >
          <button :class="['py-3 px-0 pl-7 box-border cursor-pointer flex gap-2 items-center w-full',
            items[1].isOpen ? 'bg-color_primary/50' : 'hover:bg-color_primary/50'
          ]">
            {{ locale }}
            <AtomsCountryFlag
              class="w-6"
              :countryCode="locale"
            />
          </button>
          <AtomsBaseCard
            ref="language"
            v-if="items[1].isOpen"
            color="bg-color_highlight"
            class="absolute top-0 left-0 w-full md:left-full md:ml-1 lg:-left-full lg:-ml-1"
          >
            <MoleculesLanguageSelectionMenu class="w-full justify-center flex items-center" />
          </AtomsBaseCard>
        </div>
      </template>

      <template #3>
        <MoleculesDarkmodeSwitch class="py-3 pt-6 px-0 pl-7 border-t-2 border-color_primary" />
      </template>

    </LazyMoleculesMenuOptions>
  </AtomsBaseCard>
</template>

<script setup lang="ts">

const { locale } = useI18n()

const items = ref([
  {
    id: 0,
    name: 'Account',
    isOpen: false,
  },
  {
    id: 1,
    name: `(${locale.value}) Language`,
    isOpen: false,
  },
  {
    id: 2,
    name: "Log Out",
    isOpen: false,
  },
  {
    id: 3,
    name: "DarkMode Switch",
    isOpen: false,
  }
])

const language = ref(null)

onClickOutside(language, () => {
  setTimeout(() => {
    items.value[1].isOpen = false
  }, 0);
})

const userInfos = ref({
  name: 'Alan Lima',
  email: 'example@mail.com',
})
</script>