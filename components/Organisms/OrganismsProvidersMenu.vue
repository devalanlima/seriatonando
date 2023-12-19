<template>
  <teleport
    to="body"
    v-if="menuProvidersIsOpen"
  >
    <AtomsBaseCard
      ref="target"
      :class="['fixed w-full h-full rounded-s-none rounded-e-none md:rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-2xl shadow-color_terciary flex flex-col gap-5',
        height < 600 ? 'md:max-w-full md:max-h-full' : 'md:max-w-[650px] md:max-h-[600px]'
      ]"
    >
      <AtomsCloseButton
        v-model="menuProvidersIsOpen"
        class="absolute right-5 top-5"
        @action="reveal"
      />
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl font-bold h3t-2 leading-none max-w-[90%] pl-3">CHOOSE YOUR STREAMING SERVICES</h3>
        <div class="pr-1">
          <AtomsDivisionLine />
          <AtomsMiniSearchbar
            v-model="searchbarValue"
            class="rounded-e-none rounded-s-none"
            placeholder="Search..."
          />
          <AtomsDivisionLine />
        </div>
      </div>
      <div class="flex flex-col overflow-y-scroll gap-5">
        <MoleculesDisplayProvidersMenu
          :array="checkProvider(props.providers, freeProviders, true)"
          v-model="selectedProviders"
          title="FREE"
          :searchbar-value="searchbarValue"
        />
        <MoleculesDisplayProvidersMenu
          :array="checkProvider(props.providers, freeProviders, false)"
          v-model="selectedProviders"
          title="SUBSCRIPTION"
          :is-open="true"
          :searchbar-value="searchbarValue"
        />
      </div>
      <AtomsDialogBtn
      class="w-[90%] mx-auto"
      label="SAVE"
      @action="saveChanges()"
      />
      <MoleculesConfirmDialog
      label="Do you want to save the changes?"
      :is-open="isRevealed"
      @confirm="confirm"
      @cancel="cancel"
      />
    </AtomsBaseCard>
    <AtomsBackgroundBlur index="z-40" />

  </teleport>
</template>

<script setup lang="ts">

const searchbarValue = ref<string>("");

interface Props {
  providers: Array<Provider>;
  modelValue: Array<number>;
  isOpen: boolean;
}

const target = ref(null);

const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } = useConfirmDialog()


onClickOutside(target, () => {
  reveal()
})

const menuProvidersIsOpen = computed({
  get() {
    return props.isOpen;
  },
  set(value) {
    emit('update:isOpen', value);
  }
})

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (menuProvidersIsOpen.value) {
        return 'overflow-hidden';
      } else {
        return 'overflow-auto';
      }
    }),
  },
});

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: Array<number>];
  'update:isOpen': [value: boolean];
}>()

const selectedProviders = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
})

const saveChanges = () => {
  emit('update:modelValue', selectedProviders.value);
  menuProvidersIsOpen.value = false;
}

onConfirm(() => {
  saveChanges();
})

const tmdbFiltersStore = useTMDBFiltersStore();
onCancel(() => {
  selectedProviders.value = tmdbFiltersStore.providers
  menuProvidersIsOpen.value = false;
})

const { height } = useWindowSize();

const freeProviders = ref<Array<Pick<Provider, "provider_id">>>([
  { provider_id: 283 },
  { provider_id: 473 },
  { provider_id: 544 },
  { provider_id: 559 },
  { provider_id: 566 },
  { provider_id: 315 },
  { provider_id: 300 },
  { provider_id: 677 },
  { provider_id: 1771 },
  { provider_id: 1875 },
  { provider_id: 1861 },
])

function checkProvider(array1: Array<Provider>, array2: Array<Pick<Provider, "provider_id">>, isFree: boolean) {
  if (isFree) {
    return array1.filter((provider: Pick<Provider, "provider_id">) => {
      return array2.some(freeProvider => freeProvider.provider_id === provider.provider_id);
    });
  } else {
    return array1.filter((provider: Pick<Provider, "provider_id">) => {
      return !array2.some(freeProvider => freeProvider.provider_id === provider.provider_id);
    });
  }
}

</script>