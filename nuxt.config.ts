// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', 'nuxt-mail'],
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
      to: 'secret105074@gmail.com'
    },
    smtp: {
      host: 'smtp.mail.ru',
      port: 465,
      auth: {
        user: 'vasilvaluev@mail.ru',
        pass: 'RyqHDbJ1nCvuN6fRS8VQ'
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
