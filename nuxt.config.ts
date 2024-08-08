// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL
    }
  },
  modules: ['@nuxt/eslint', '@nuxtjs/color-mode', '@nuxt/ui']
})
