import { useProjectStore } from "./ProjectStore";

export const useTMDBFiltersStore = defineStore("TMDBFiltersStore", () => {
  //watch region
  const projectStore = useProjectStore();
  const watchRegion = computed<Regions>(() => projectStore.region);

  //show type movie/tv
  const showType = ref<ShowType>("all");
  const setShowType = (selectedShowtype: ShowType) => {
    showType.value = selectedShowtype;
  }

  //release year/date
  const releaseYearLte = ref<number>(Number(new Date().getFullYear()));
  const releaseYearGte = ref<number>(1904);
  const releaseDateLte = computed<string>(() => {
    if (releaseYearLte.value === new Date().getFullYear()) {
      return `${releaseYearLte.value}-${new Date().getMonth() + 1}-${new Date().getDate().toString().padStart(2, '0')}`;
    } else {
      return `${releaseYearLte.value}-12-31`;
    }
  })
  const releaseDateGte = computed<string>(() => `${releaseYearGte.value}-01-01`);

  //vote average
  const voteAverageLte = ref<number>(10);
  const voteAverageGte = ref<number>(0);

  //genres
  const movieGenres = ref<Array<number>>([]);
  const tvGenres = ref<Array<number>>([])

  //age group
  const certifications = ref<Array<string>>([])

  //providers
  const providers = ref<Array<number>>([])

  //sort by
  const sortBy = ref<SortBy>('primary_release_date.desc')

  //vote count
  const minVoteCount = ref(100)

  return { watchRegion, showType, setShowType, releaseDateLte, releaseDateGte, releaseYearGte, releaseYearLte, voteAverageGte, voteAverageLte, movieGenres, tvGenres, certifications, providers, sortBy, minVoteCount };
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTMDBFiltersStore, import.meta.hot));
}