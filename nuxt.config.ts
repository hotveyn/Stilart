// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    'nuxt-swiper',
    '@nuxtjs/google-fonts',
    'nuxt-mail'
  ],
  runtimeConfig: {
    public: {
      mailUser: process.env.MAIL_USER
    }
  },
  components: {
    pathPrefix: false
  },
  vue: {
    defineModel: true
  },
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
  mail: {
    message: {
      to: process.env.MAIL_TO
    },
    smtp: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    }
  },
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
