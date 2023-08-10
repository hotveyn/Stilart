<script setup lang="ts">
import TheFooter from '~/components/footer/TheFooter.vue'
import SecondaryHeader from '~/components/header/SecondaryHeader.vue'
</script>

<template>
  <div class="layout-secondary w">
    <SecondaryHeader />
    <main class="main w">
      <div class="container-bg layout-secondary__logo">
        <NuxtLink to="/">
          <img src="/images/logo/logoBSc.svg" alt="logo" class="header__logo">
        </NuxtLink>
      </div>
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

  &__logo{
    margin-top: 50px;
  }
}
</style>
