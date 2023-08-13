<script setup lang="ts">
import FormOpening from '~/components/form/FormOpening.vue'
import BaseGlass from '~/components/base/BaseGlass.vue'
</script>

<template>
  <section class="opening w">
    <div class="container opening__content">
      <div class="opening__left">
        <h2 class="opening__title">
          Стильный и строгий интерьер для вашего любимого дома
        </h2>
        <div class="opening__glasses opening__glasses_pc">
          <BaseGlass class="opening__glass opening__glass_1">
            Интерьер для кухни <br>
            от 14 440₽
          </BaseGlass>
          <BaseGlass class="opening__glass opening__glass_2">
            Интерьер для гостиной <br>
            от 18 999₽
          </BaseGlass>
          <BaseGlass class="opening__glass opening__glass_3">
            Интерьер для спальни <br>
            от 16 999₽
          </BaseGlass>
          <BaseGlass class="opening__glass opening__glass_4">
            Интерьер для ванной <br>
            от 19 999₽
          </BaseGlass>
        </div>
      </div>
      <div class="opening__right">
        <FormOpening />
      </div>
      <div class="opening__glasses opening__glasses_mob">
        <BaseGlass class="opening__glass">
          Интерьер для кухни <br>
          от 14 440₽
        </BaseGlass>
        <BaseGlass class="opening__glass">
          Интерьер для гостиной <br>
          от 18 999₽
        </BaseGlass>
        <BaseGlass class="opening__glass">
          Интерьер для спальни <br>
          от 16 999₽
        </BaseGlass>
        <BaseGlass class="opening__glass">
          Интерьер для ванной <br>
          от 19 999₽
        </BaseGlass>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.opening {
  position: relative;
  color: $white;
  overflow: hidden;

  &__content {
    position: relative;
    padding: adpval(30, 120) 0 adpval(160, 240) 0;
    display: grid;
    grid-template-columns: auto adpval(380, 460, 1210, 800);
    gap: adpval(14, 40);
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__glasses {
    position: relative;
  }

  &__glass {
    position: absolute;

    &_1 {
      bottom: 150px;
      left: 30px;
    }

    &_2 {
      left: adpval(50, 330);
      bottom: 20px;
    }

    &_3 {
      left: 120px;
      top: 50px;
    }

    &_4 {
      right: -300px;
      top: 90px;
    }
  }

  &__title {
    max-width: 690px;
    font-size: adpval(28, 36);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    letter-spacing: 2.52px;
    text-transform: uppercase;
  }
}

@media (width >= 1050px) {
  .opening__glasses_mob {
    display: none;
  }
}

@media (width < 1050px) {
  .opening {
    &__content {
      grid-template-columns: 1fr;
    }

    &__right {
      margin: 0 auto;
      width: min(600px, 100%);
    }

    &__glasses {
      &_pc {
        display: none;
      }

      &_mob {
        display: flex;
        align-items: center;
      }
    }

    &__glass {
      position: static;
    }
  }
}

@media (width < 500px) {
  .opening {
    &__glasses {
      display: none;
    }
  }
}
</style>
