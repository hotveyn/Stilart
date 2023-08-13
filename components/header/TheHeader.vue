<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'
import TheOpening from '~/components/section/the-header/SectionOpening.vue'
import BaseBurger from '~/components/base/BaseBurger.vue'
import BaseMenu from '~/components/base/BaseMenu.vue'
import TransitionOpacity from '~/components/transition/TransitionOpacity.vue'

const isBurgerOpen = ref<boolean>(false)

function changeBurgerVisibility () {
  isBurgerOpen.value = !isBurgerOpen.value
}
</script>

<template>
  <div class="header-wrapper w">
    <header class="header w">
      <div class="container header__content">
        <NuxtLink to="/">
          <img src="/images/logo/logoW.svg" alt="logo" class="header__logo">
        </NuxtLink>
        <BaseNavigation type="header" class="header__nav" />
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
    <TheOpening />
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  background: linear-gradient($trnsp-d-tree, $trnsp-d-tree),
  url("/images/bg/opening.png") no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: adpval(80, 120);
  //height: 100dvh;
  //max-height: 1080px;
  //min-height: 700px;
}

.header {
  border-bottom: 1px solid $white;
  padding: 10px 0;
  z-index: 2;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (width >= 900px) {
  .header {
    &__burger-button {
      display: none;
    }
  }
}

@media (width < 900px) {
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
