import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    pageTransition: {
      mode: 'out-in',
      appear: true
    }
  },

  css: ['assets/css/main.css'],

  compatibilityDate: '2025-08-13',

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  experimental: {
    typedPages: true
  },

  imports: {
    dirs: ['./**/*/stores/**']
  },

  modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', '@pinia/nuxt'],

  runtimeConfig: {
    githubToken: import.meta.env.NUXT_GITHUB_TOKEN
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
