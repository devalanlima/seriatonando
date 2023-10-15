<template>
  <AtomsBaseCard class="flex w-fit flex-col gap-2">
    <MoleculesProfileUserInfos
      :name="userInfos.name"
      :email="userInfos.email"
    />
    <MoleculesMenuOptions
      class="-mx-6"
      :options="menuItems"
      v-model:output="menuItemClicked"
    >
      <template #lastOption>
        <MoleculesDarkmodeSwitch class="px-6" />
      </template>
    </MoleculesMenuOptions>
  </AtomsBaseCard>
</template>

<script setup lang="ts">
const menuItems = ref(["Account", "Settings", "Log out"])

const userInfos = ref({
  name: 'Alan Lima',
  email: 'example@mail.com',
})

const menuItemClicked = ref<number>()
</script>