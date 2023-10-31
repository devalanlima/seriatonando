<template>
  <teleport
    to="body"
    v-if="menuProvidersIsOpen"
  >
    <AtomsBaseCard
      ref="target"
      :class="['fixed w-full h-full rounded-s-none rounded-e-none md:rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-2xl shadow-color_terciary flex flex-col gap-3',
        height < 600 ? 'md:max-w-full md:max-h-full' : 'md:max-w-[600px] md:max-h-[600px]'
      ]"
    >
      <AtomsCloseButton
        v-model="menuProvidersIsOpen"
        class="absolute right-5 top-5"
        @action="menuProvidersIsOpen = false"
      />
      <p class="text-2xl font-bold pt-2 leading-none max-w-[90%]">CHOOSE YOUR STREAMING SERVICES</p>
      <div>
        <AtomsDivisionLine />
        <AtomsMiniSearchbar v-model="searchbarValue" class="rounded-e-none rounded-s-none"/>
        <AtomsDivisionLine />
      </div>
      <ul class="grid grid-cols-[repeat(auto-fit,_minmax(50px,_55px))] p-1 place-items-center justify-center gap-7 overflow-y-auto">
        <li v-if="searchbarValue.length === 0" :class="['hover:bg-color_primary rounded-lg grid place-items-center',
          isAllProvidersChecked ? 'bg-color_primary/80' : 'bg-color_primary/30'
        ]">
          <AtomsButtonIcon
            :icon="isAllProvidersChecked ? AtomsIconsCross : AtomsIconsSelectAll"
            v-model="isAllProvidersChecked"
            @click="isAllProvidersToggle"
            :fill-color="isAllProvidersChecked ? 'fill-color_terciary' : `fill-color_terciary/30 hover:fill-color_terciary/80`"
            :title="isAllProvidersChecked ? 'Clear all selected streaming services' : 'Select all streaming services'"
          />
        </li>
        <template
          v-for="provider in props.providers"
          :key="provider.provider_id"
        >
          <li v-if="searchbarValue.length === 0? true : provider.provider_name.toLowerCase().includes(searchbarValue.toLowerCase()) ? true : false" >
            <AtomsStreamingLabel
              :alt-image="provider.provider_name + 'logo'"
              :src-image="`https://image.tmdb.org/t/p/w500${provider.logo_path}`"
              :title="provider.provider_name"
              :is-checked="selectedProviders.includes(provider.provider_id)"
            >
              <input
                class="sr-only"
                type="checkbox"
                v-model="selectedProviders"
                :value="provider.provider_id"
              >
            </AtomsStreamingLabel>
          </li>
        </template>
      </ul>
    </AtomsBaseCard>
    <AtomsBackgroundBlur />
  </teleport>
</template>

<script setup lang="ts">
import AtomsIconsCross from '../Atoms/Icons/AtomsIconsCross.vue';
import AtomsIconsSelectAll from '../Atoms/Icons/AtomsIconsSelectAll.vue';

const searchbarValue = ref<string>("")

type Provider = {
  display_priorities: object;
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

interface Props {
  providers: Array<Provider>;
  modelValue: Array<number>;
  isOpen: boolean;
}

const target = ref(null)

onClickOutside(target, () => menuProvidersIsOpen.value = false)

const menuProvidersIsOpen = computed({
  get() {
    return props.isOpen
  },
  set(value) {
    emit('update:isOpen', value)
  }
})

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (menuProvidersIsOpen.value) {
        return 'overflow-hidden'
      } else {
        return 'overflow-auto'
      }
    }),
  },
});

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: Array<number>];
  'update:isOpen': [value: boolean];
}>()

const selectedProviders = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

watch(() => selectedProviders.value, () => {
  emit('update:modelValue', selectedProviders.value)
})

const isAllProvidersChecked = ref<boolean>(false)
const isAllProvidersToggle = () => {
  if (!isAllProvidersChecked.value) {
    props.providers.forEach(provider => {
      selectedProviders.value.push(provider.provider_id)
    });
    isAllProvidersChecked.value = true
  } else {
    selectedProviders.value = []
    isAllProvidersChecked.value = false
  }
}

const { height } = useWindowSize()
</script>

<style scoped></style>