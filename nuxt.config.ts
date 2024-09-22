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

  imports: {
    dirs: ['./types/**', './stores/**']
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', '@pinia/nuxt'],
  compatibilityDate: '2024-09-19',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  }
})
