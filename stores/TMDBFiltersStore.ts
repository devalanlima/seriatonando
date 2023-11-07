import { useProjectStore } from "./ProjectStore";

export const useTMDBFiltersStore = defineStore("TMDBFiltersStore", () => {

  const projectStore = useProjectStore()
  const watchRegion = computed<Regions>(() => projectStore.region)

  const showType = ref<ShowType>("all")
  const setShowType = (selectedShowtype: ShowType) => {
    showType.value = selectedShowtype
  }

  const releaseYearLte = ref<number>(Number(new Date().getFullYear()))
  const releaseYearGte = ref<number>(1865)
  const releaseDateLte = computed<string>(()=>{
    if (releaseYearLte.value === new Date().getFullYear()) {
      return `${releaseYearLte.value}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    } else {
      return `${releaseYearLte.value}-12-31`
    }
  })
  const releaseDateGte = computed<string>(()=> `${releaseYearGte.value}-01-01`)

  return { watchRegion, showType, setShowType, releaseDateLte, releaseDateGte, releaseYearGte, releaseYearLte }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTMDBFiltersStore, import.meta.hot));
}