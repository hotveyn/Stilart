<script setup lang="ts">
import SectionContacts from '~/components/Section/SectionContacts.vue'
import BaseNavigation from '~/components/Base/BaseNavigation.vue'
</script>

<template>
  <footer class="footer w">
    <SectionContacts class="footer__contacts" />
    <div class="container footer__content">
      <NuxtLink to="/">
        <img
          src="/images/logo/logoB.svg"
          alt="logo"
        >
      </NuxtLink>
      <BaseNavigation type="footer" class="footer__nav" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 120px;
  &__content {
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
