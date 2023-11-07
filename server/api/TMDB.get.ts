const { public: BASE, TMDB_KEY } = useRuntimeConfig()

export default defineEventHandler(async (event) => {

const params = getQuery(event)


  const data = await $fetch(`${BASE.TMDB_URL}/discover/movie`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TMDB_KEY
    },
    params: params
  })

  return data
})
