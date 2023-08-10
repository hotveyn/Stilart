<script setup lang="ts">
import SectionAbout from '~/components/Section/Index/SectionIndexAbout.vue'
import SectionProjects from '~/components/Section/Index/SectionIndexProjects.vue'
import SectionServices from '~/components/Section/Index/SectionIndexServices.vue'
import SectionStages from '~/components/Section/Index/SectionIndexStages.vue'
import SectionFAQ from '~/components/Section/Index/SectionIndexFAQ.vue'
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
