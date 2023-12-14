const { public: BASE, TMDB_KEY } = useRuntimeConfig()

export default defineEventHandler(async (event) => {

const params = getQuery(event)


  const data:Discover = await $fetch(`${BASE.TMDB_URL}/search/multi`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_KEY
    },
    params: params
  })

  return data
})
