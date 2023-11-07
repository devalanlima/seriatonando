import { defineStore, acceptHMRUpdate } from "pinia"

export const useProjectStore = defineStore("ProjectStore", () => {
  const i18n = useI18n();
  const region = computed<Regions>(() => i18n.locale.value.slice(i18n.locale.value.indexOf('-') + 1) as Regions)
  const defaultRegion = computed<Regions>(() => i18n.defaultLocale.slice(i18n.defaultLocale.indexOf('-') + 1) as Regions)

  const language = computed(()=>i18n.locale.value)

  return { region, defaultRegion, language }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
}