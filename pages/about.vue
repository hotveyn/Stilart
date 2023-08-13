<script setup lang="ts">
import ScreenAbout from '~/screens/about/ScreenAbout.vue'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'secondary'
})

useSeoMeta({
  title: 'О нас | StilArt'
})
</script>

<template>
  <ScreenAbout />
</template>

<style scoped></style>
