<script setup lang="ts">
import TheHeader from '~/components/header/TheHeader.vue';
import TheFooter from '~/components/footer/TheFooter.vue';
</script>

<template>
  <div class="layout-default">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<style scoped></style>
