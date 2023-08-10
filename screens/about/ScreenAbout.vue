<script setup lang="ts">
import SectionAboutCommand from '~/components/Section/About/SectionAboutCommand.vue'
</script>

<template>
  <div class="screen-about">
    <SectionAboutOur />
    <SectionAboutCommand />
  </div>
</template>

<style scoped>
.screen-about {
  padding: 70px 0 120px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 120px;
}
</style>
