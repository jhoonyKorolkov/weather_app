// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  ssr: false,
  colorMode: {
    preference: 'dark'
  },

  modules: ['@nuxt/ui', '@nuxtjs/color-mode']
})
