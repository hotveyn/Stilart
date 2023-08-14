<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'
import TheOpening from '~/components/section/the-header/SectionOpening.vue'
import BaseBurger from '~/components/base/BaseBurger.vue'
import BaseMenu from '~/components/base/BaseMenu.vue'
import TransitionOpacity from '~/components/transition/TransitionOpacity.vue'
import { onMounted } from '#imports'
import TransitionOpacitySemi from '~/components/transition/TransitionOpacitySemi.vue'

const images = ref([
  {
    id: 1,
    url: '/images/bg/opening1.jpg'
  },
  {
    id: 2,
    url: '/images/bg/opening2.jpg'
  },
  {
    id: 3,
    url: '/images/bg/opening3.png'
  }
])
const currentImage = ref<string>(images.value.at(-1)!.url as string)
const isBurgerOpen = ref<boolean>(false)

interface imagesIndexIterator extends Generator<number, number, number> {
}

function * imagesIndexGenerator (): imagesIndexIterator {
  yield 0
  yield 1
  return 2
}

onMounted(() => {
  let imagesIndex = imagesIndexGenerator()
  setInterval(() => {
    const imageIndex = imagesIndex.next()
    currentImage.value = images.value[imageIndex.value]!.url as string
    if (imageIndex.done) {
      imagesIndex = imagesIndexGenerator()
    }
  }, 6000)
})

function changeBurgerVisibility () {
  isBurgerOpen.value = !isBurgerOpen.value
}
</script>

<template>
  <div
    class="header-wrapper w"
  >
    <TransitionOpacitySemi>
      <div
        :key="currentImage"
        class="header__bg"
        :style="`
                background: linear-gradient(#6553287F, #6553287F),
                url(${currentImage}) no-repeat;
                background-size: cover;
                background-position: center`"
      />
    </TransitionOpacitySemi>
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
.header__bg {
  //background: linear-gradient($trnsp-d-tree, $trnsp-d-tree),
  //url("/images/bg/opening.png") no-repeat;
  animation: 1s bg linear alternate infinite;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}

.header-wrapper {
  position: relative;
  margin-bottom: adpval(80, 120);
}

.header {
  z-index: 2;
  position: relative;
  border-bottom: 1px solid $white;
  padding: 10px 0;

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
