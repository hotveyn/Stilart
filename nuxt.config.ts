// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_usage.scss" as *;'
        }
      }
    }
  },
  css: ['assets/css/reset.scss', 'assets/css/_globals.scss'],
  googleFonts: {
    families: {
      Lunasima: true
    },
    subsets: 'cyrillic'
  },
  app: {
    head: {
      title: 'StilArt'
    }
  }
})
