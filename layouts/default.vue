<script setup lang="ts">
import TheHeader from '~/components/header/TheHeader.vue'
import TheFooter from '~/components/footer/TheFooter.vue'
</script>

<template>
  <div class="layout-default w">
    <TheHeader />
    <main class="main w">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.layout-default {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
</style>
