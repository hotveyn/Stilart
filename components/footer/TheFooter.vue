<script setup lang="ts">
import SectionContacts from '~/components/section/the-footer/SectionContacts.vue'
import BaseNavigation from '~/components/base/BaseNavigation.vue'
</script>

<template>
  <footer class="footer w">
    <SectionContacts class="footer__contacts" />
    <div class="container footer__content">
      <NuxtLink to="/">
        <img src="/images/logo/logoB.svg" alt="logo">
      </NuxtLink>
      <BaseNavigation type="footer" class="footer__nav" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 120px;

  &__content {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
  }
}

@media (width < 500px) {
  .footer {
    &__content {
      flex-direction: column;
      align-items: start;
    }
  }
}
</style>
