<template>
  <div>
    <button
      class="flex flex-col gap-3 cursor-pointer w-full"
      @click="props.searchbarValue.length === 0 ? isOpen = !isOpen : ''"
    >
      <AtomsDivisionLine />
      <div class="flex justify-between px-3 items-center w-full">
        <h4 class="text-xl font-bold leading-none max-w-[90%]">{{ props.title }}</h4>
        <label
          class="flex items-center gap-2 text-lg text-color_secondary mx-auto mr-5 cursor-pointer justify-between"
          v-if="searchbarValue.length === 0"
        >
          <AtomsCheckbox v-model="checkboxValue" />
          <p :class="[checkboxValue ? 'text-color_primary' : 'text-color_secondary', 'w-[100px] whitespace-nowrap']">{{
            checkboxValue ? "Unselect All" :
            "Select All" }}</p>
        </label>
        <AtomsIconsArrow
          width="w-5"
          fill-color="fill-color_primary"
          :class="[isOpen ? 'rotate-180' : 'rotate-0', 'transition-all duration-500 ease-out']"
          v-if="searchbarValue.length === 0"
        />
      </div>
      <AtomsDivisionLine />
    </button>
    <div
      :class="['relative overflow-hidden transition-all border-color_primary ease-in-out duration-[400ms]', searchbarValue.length > 0 || isOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 -translate-y-50 opacity-0 ', searchbarValue.length === 0 ? 'border-b-[1px]' : 'border-b-[0px]']"
    >
      <ul :class="['grid -translate-y-full place-items-center border-color_primary px-1 grid-cols-[repeat(auto-fit,_minmax(50px,_50px))] justify-start gap-7 transition-all ease-in-out py-3', searchbarValue.length > 0 || isOpen ? 'translate-y-0 duration-200' : '-translate-y-full duration-[730ms]'
      ]">
        <template
          v-for="provider in props.array"
          :key="provider.provider_id"
        >
          <li
            v-if="props.searchbarValue.length === 0 ? true : provider.provider_name.toLowerCase().includes(props.searchbarValue.toLowerCase()) ? true : false"
          >
            <AtomsStreamingInput
              :alt-image="provider.provider_name + 'logo'"
              :src-image="`https://image.tmdb.org/t/p/w500${provider.logo_path}`"
              :title="provider.provider_name"
              v-model="selectedProviders"
              :input-value="provider.provider_id"
            />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  modelValue: Array<number>;
  array: Array<Provider>;
  isOpen?: boolean;
  searchbarValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  searchbarValue: "",
})

const emit = defineEmits<{
  "update:modelValue": [value: typeof props.modelValue],
}>()

const isOpen = ref(props.isOpen)

const selectedProviders = computed({
  get() {
    return props.modelValue
  },
  set(selectedProviders) {
    emit("update:modelValue", selectedProviders)
  },
})

const checkboxValue = ref(false)

watch(() => checkboxValue.value, (newValue) => {
  if (newValue) {
    isOpen.value = true
    props.array.map(element => {
      if (!selectedProviders.value.includes(element.provider_id)) {
        selectedProviders.value.push(element.provider_id)
      }
    })
  } else {
    props.array.map(element => {
      selectedProviders.value.splice(selectedProviders.value.indexOf(element.provider_id), 1)
    })
  }
})

const setCheckboxValue = () => {
  let trueArr: Array<boolean> = []
  if (selectedProviders.value.length > 0) {
    props.array.map((element) => {
      if (selectedProviders.value.includes(element.provider_id)) {
        trueArr.push(true)
      } else {
        trueArr.push(false)
      }
    })
  } else {
    trueArr.push(false)
  }
  if (trueArr.every(elemento => elemento === true)) {
    checkboxValue.value = true
  }
  if (selectedProviders.value.length === 0) {
    checkboxValue.value = false
  }
}

watch(() => selectedProviders.value, () => {
  setCheckboxValue()
})

onMounted(() => {
  setCheckboxValue()
})

</script>