<script setup lang="ts">
import TheFooter from '~/components/footer/TheFooter.vue'
import SecondaryHeader from '~/components/header/SecondaryHeader.vue'
</script>

<template>
  <div class="layout-secondary w">
    <SecondaryHeader />
    <main class="main w">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.layout-secondary {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
</style>
