import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  app: {
    pageTransition: {
      mode: 'out-in',
      appear: true
    }
  },

  css: ['assets/css/main.css'],

  compatibilityDate: '2025-08-13',

  experimental: {
    typedPages: true
  },

  imports: {
    dirs: ['./**/*/types/**', './**/*/stores/**']
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],

  nitro: {
    preset: 'cloudflare-worker',
    cloudflare: {
      deployConfig: true
    }
  },

  runtimeConfig: {
    githubToken: import.meta.env.NUXT_GITHUB_TOKEN
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
