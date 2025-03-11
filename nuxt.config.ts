export default defineNuxtConfig({
  app: {
    pageTransition: {
      mode: 'out-in',
      appear: true
    }
  },

  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },

  experimental: {
    typedPages: true
  },

  future: {
    compatibilityVersion: 4
  },

  imports: {
    dirs: ['./types/**', './**/*/stores/**']
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    githubToken: process.env.NUXT_GITHUB_TOKEN
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },

  compatibilityDate: '2025-03-11'
})
