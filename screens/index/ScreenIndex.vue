<script setup lang="ts">
import SectionAbout from '~/components/Section/SectionAbout.vue'
import SectionProjects from '~/components/Section/SectionProjects.vue'
import SectionServices from '~/components/Section/SectionServices.vue'
import SectionStages from '~/components/Section/SectionStages.vue'
import SectionFAQ from '~/components/Section/SectionFAQ.vue'
</script>

<template>
  <div class="index-screen">
    <SectionAbout />
    <SectionProjects />
    <SectionServices />
    <SectionStages />
    <SectionFAQ />
  </div>
</template>

<style scoped lang="scss">
.index-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 120px;
}
</style>
