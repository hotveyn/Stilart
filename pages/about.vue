<script setup lang="ts">
import ScreenAbout from '~/screens/about/ScreenAbout.vue'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'secondary'
})

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
  title: 'О нас | StilArt',
  ogTitle: 'О нас | StilArt',
  description: 'StilArt - это команда профессионалов, специализирующихся на создании уникальных и уютных интерьеров. Мы предлагаем широкий спектр услуг, включая разработку дизайн-проектов, подбор материалов и мебели, а также сопровождение проекта от идеи до реализации. Наша цель - создать пространства, которые отражают индивидуальность и воплощают ваши желания.',
  ogDescription: 'StilArt - это команда профессионалов, специализирующихся на создании уникальных и уютных интерьеров. Мы предлагаем широкий спектр услуг, включая разработку дизайн-проектов, подбор материалов и мебели, а также сопровождение проекта от идеи до реализации. Наша цель - создать пространства, которые отражают индивидуальность и воплощают ваши желания.',
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
  <ScreenAbout />
</template>

<style scoped></style>
