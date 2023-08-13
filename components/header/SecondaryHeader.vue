<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'
import BaseBurger from '~/components/base/BaseBurger.vue'
import TransitionOpacity from '~/components/transition/TransitionOpacity.vue'
import BaseMenu from '~/components/base/BaseMenu.vue'

const isBurgerOpen = ref<boolean>(false)

function changeBurgerVisibility () {
  isBurgerOpen.value = !isBurgerOpen.value
}
</script>

<template>
  <header class="header w">
    <div class="container-bg header__content">
      <NuxtLink to="/">
        <img src="/images/logo/logoW.svg" alt="logo" class="header__logo">
      </NuxtLink>
      <BaseNavigation style="color: black" class="header__nav" />
      <BaseBurger
        :is-open="isBurgerOpen"
        class="header__burger-button"
        @click="changeBurgerVisibility"
      />
      <Teleport to="body">
        <TransitionOpacity>
          <BaseMenu v-if="isBurgerOpen" @click-nav="isBurgerOpen = false" />
        </TransitionOpacity>
      </Teleport>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid $white;
  background-color: $tree;
  padding: 10px 0;
  z-index: 2;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (width >= 700px) {
  .header {
    &__burger-button {
      display: none;
    }
  }
}

@media (width < 700px) {
  .header {
    &__nav {
      display: none;
    }

    &__burger-button {
      display: block;
      z-index: 6;
    }
  }
}
</style>
