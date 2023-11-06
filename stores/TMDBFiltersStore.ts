import { useProjectStore } from "./ProjectStore";

export const useTMDBFiltersStore = defineStore("TMDBFiltersStore", () => {

  const projectStore = useProjectStore()
  const watchRegion =  computed<Regions>(()=> projectStore.region)

  const showType =  ref<ShowType>("all")
  const setShowType = (selectedShowtype: ShowType) => {
    showType.value = selectedShowtype
  }


  return { watchRegion, showType, setShowType }
})
if(import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(useTMDBFiltersStore, import.meta.hot));
}