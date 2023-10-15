export default defineEventHandler(event => {
  const themeCookie = getCookie(event, "theme")
  return { themeCookie }
})