<script setup lang="ts">
import BaseNavigation from '~/components/Base/BaseNavigation.vue'
</script>

<template>
  <header class="header w">
    <div class="container header__content">
      <BaseNavigation style="color: black" type="wide" class="header__nav" />
    </div>
  </header>
</template>

<style scoped lang="scss">

.header {
  border-bottom: 1px solid $white;
  background-color: $tree;
  padding: 30px 0;
  z-index: 2;

  &__content {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}
</style>
