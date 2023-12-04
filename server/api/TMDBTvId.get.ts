const { public: BASE, TMDB_KEY } = useRuntimeConfig()

export default defineEventHandler(async (event) => {

const params = getQuery(event)


  const data:TVId= await $fetch(`${BASE.TMDB_URL}/tv/${params.id}?append_to_response=content_ratings%2Ccredits%2Cwatch%2Fproviders%2Cvideos&include_video_language=en-US,${params.language}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_KEY
    },
    params: params
  })

  return data
})
