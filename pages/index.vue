<script setup lang="ts">
import ScreenIndex from '~/screens/index/ScreenIndex.vue'

useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})

useSeoMeta({
  title: 'Главная | StilArt',
  ogTitle: 'Главная | StilArt',
  description: 'StilArt - предлагает профессиональные услуги по созданию уникальных и функциональных пространств. Мы поможем воплотить ваши идеи в реальность, создавая комфортные и стильные интерьеры для жилых и коммерческих помещений.',
  ogDescription: 'StilArt - предлагает профессиональные услуги по созданию уникальных и функциональных пространств. Мы поможем воплотить ваши идеи в реальность, создавая комфортные и стильные интерьеры для жилых и коммерческих помещений.',
  themeColor: '#d2b48c',
  ogUrl: 'https://stilart-design.ru',
  ogImage: 'https://i.imgur.com/S05HSOz.png',
  twitterTitle: 'StilArt',
  twitterDescription: 'StilArt - предлагает профессиональные услуги по созданию уникальных и функциональных пространств. Мы поможем воплотить ваши идеи в реальность, создавая комфортные и стильные интерьеры для жилых и коммерческих помещений.',
  twitterImage: 'https://i.imgur.com/S05HSOz.png',
  twitterCard: 'summary'
})
</script>

<template>
  <ScreenIndex />
</template>

<style scoped></style>
