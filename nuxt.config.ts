// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts:{
    families:{
      'Work+Sans': true,
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
})