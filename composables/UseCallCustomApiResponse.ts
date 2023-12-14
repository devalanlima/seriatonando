export default async function useCallCustomApiResponse(url: string, params: object) {
  const { data, pending, error } = await useFetch(url, {
    params: params,
    key: url + Math.random().toString ,
    transform: (item: Discover) => {
      const results = item.results.map((item): MoviesAndTv => ({
        id: item.id,
        title: 'title' in item? item.title : item.name,
        genres: item.genre_ids,
        overview: item.overview,
        posterPath: item.poster_path,
        popularity: item.popularity,
        showType: 'title' in item? 'movies' : 'name' in item? 'tv': 'all',
        releaseDate: 'release_date' in item? item.release_date : item.first_air_date
      }));
      const totalPages  = item.total_pages;
      const totalResults = item.total_results;
      return {results, totalResults, totalPages};
    },
    watch: false
  })
  return {data, pending, error}
}