<script setup lang="ts">
import SectionAboutCommand from '~/components/section/about/SectionAboutCommand.vue'
import SectionAboutOur from '~/components/section/about/SectionAboutOur.vue'
</script>

<template>
  <div class="screen-about">
    <SectionAboutOur />
    <SectionAboutCommand />
  </div>
</template>

<style scoped lang="scss">
.screen-about {
  padding: adpval(30, 70) 0 adpval(0, 120) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: adpval(80, 120);
}
</style>
