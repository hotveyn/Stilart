<script setup lang="ts">
import SectionAbout from '~/components/section/index/SectionIndexAbout.vue'
import SectionProjects from '~/components/section/index/SectionIndexProjects.vue'
import SectionServices from '~/components/section/index/SectionIndexServices.vue'
import SectionStages from '~/components/section/index/SectionIndexStages.vue'
import SectionFAQ from '~/components/section/index/SectionIndexFAQ.vue'
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
  gap: adpval(80, 120);
}
</style>
