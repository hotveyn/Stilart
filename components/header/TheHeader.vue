<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'
import TheOpening from '~/components/section/the-header/SectionOpening.vue'
</script>

<template>
  <div class="header-wrapper w">
    <header class="header w">
      <div class="container header__content">
        <NuxtLink to="/">
          <img src="/images/logo/logoW.svg" alt="logo" class="header__logo">
        </NuxtLink>
        <BaseNavigation type="header" class="header__nav" />
      </div>
    </header>
    <TheOpening />
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  background:
    linear-gradient($trnsp-d-tree, $trnsp-d-tree), url("/images/bg/opening.png") no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 120px;
  height: 100dvh;
  max-height: 1080px;
}

.header {
  border-bottom: 1px solid $white;
  padding: 10px 0;
  z-index: 2;

  &__content {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}
</style>
