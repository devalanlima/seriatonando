export default async function useCallCustomApiResponse(url: string, params: object) {
  const { data, pending, error } = await useFetch(url, {
    params: params,
    key: url + Math.random().toString ,
    transform: (item: Discover) => {
      return item.results.map((item): MoviesAndTv => ({
        id: item.id,
        title: 'title' in item? item.title : item.name,
        genres: item.genre_ids,
        overview: item.overview,
        posterPath: item.poster_path,
        popularity: item.popularity,
        showType: 'title' in item? 'movie' : 'tv',
      }));
    },
  })
  return {data, pending, error}
}