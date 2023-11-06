import { useProjectStore } from "./ProjectStore";

export const useTMDBFiltersStore = defineStore("TMDBFiltersStore", () => {

  const projectStore = useProjectStore()
  const watchRegion =  computed<Regions>(()=> projectStore.region)

  return { watchRegion }
})
if(import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(useTMDBFiltersStore, import.meta.hot));
}