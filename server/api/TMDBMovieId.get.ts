const { public: BASE, TMDB_KEY } = useRuntimeConfig()

export default defineEventHandler(async (event) => {

const params = getQuery(event)


  const data:MovieId = await $fetch(`${BASE.TMDB_URL}/movie/${params.id}?append_to_response=watch%2Fproviders%2Crelease_dates%2Ccredits%2Cvideos&include_video_language=en-US,${params.language}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_KEY
    },
    params: params
  })

  return data
})
