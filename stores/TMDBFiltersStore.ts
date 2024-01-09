import { useProjectStore } from "./ProjectStore";

export const useTMDBFiltersStore = defineStore("TMDBFiltersStore", () => {
  //watch region
  const projectStore = useProjectStore();
  const watchRegion = computed<Regions>(() => projectStore.region);

  //show type movie/tv
  const showType = ref<ShowType>("all");

  //release year/date
  const releaseYearLte = ref<number>(Number(new Date().getFullYear()));
  const releaseYearGte = ref<number>(1865);
  const releaseDateLte = computed<string>(() => {
    if (releaseYearLte.value === new Date().getFullYear()) {
      return `${releaseYearLte.value}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;
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
  const tvGenres = ref<Array<number>>([]);

  //age group
  const certifications = ref<Array<string>>([]);

  //providers
  const cookieProviders = useCookie<Array<number>>('selected_providers');
  const providers = ref<Array<number>>([]);
  if (cookieProviders.value === undefined) {
    providers.value = [];
  } else {
    providers.value = cookieProviders.value;
  }
  watch(() => providers.value, (newValue) => {
    cookieProviders.value = newValue
  })

  //sort by
  const sortBy = ref<SortBy>('primary_release_date.desc');

  //vote count
  const minVoteCount = ref(10);

  const resetStore = () => {
    showType.value = 'all'
    //release year/date
    releaseYearLte.value = Number(new Date().getFullYear());
    releaseYearGte.value = 1865;
    //vote average
    voteAverageLte.value = 10;
    voteAverageGte.value = 0;
    //genres
    movieGenres.value = [];
    tvGenres.value = [];
    //age group
    certifications.value = [];
    //providers
    providers.value = cookieProviders.value;
    //sort by
    sortBy.value = 'primary_release_date.desc';
    //vote count
    minVoteCount.value = 10;
  }

  return { watchRegion, showType, releaseDateLte, releaseDateGte, releaseYearGte, releaseYearLte, voteAverageGte, voteAverageLte, movieGenres, tvGenres, certifications, providers, sortBy, minVoteCount, resetStore };
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTMDBFiltersStore, import.meta.hot));
}