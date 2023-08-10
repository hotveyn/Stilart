<script setup lang="ts">
import FormOpening from '~/components/Form/FormOpening.vue'
</script>

<template>
  <section class="opening w">
    <div class="container opening__content ">
      <div class="opening__left">
        <h2 class="opening__title h2">
          Стильный и строгий интерьер для вашего любимого дома
        </h2>
        <div class="opening__glasses">
          <BaseGlass class="opening__glass opening__glass_1">
            Интерьер для кухни <br> от 14 440₽
          </BaseGlass>
          <BaseGlass class="opening__glass opening__glass_2">
            Интерьер для гостиной <br> от 18 999₽
          </BaseGlass>
          <BaseGlass class="opening__glass opening__glass_3">
            Интерьер для спальни <br> от 16 999₽
          </BaseGlass>
          <BaseGlass class="opening__glass opening__glass_4">
            Интерьер для ванной <br> от 19 999₽
          </BaseGlass>
        </div>
      </div>
      <div class="opening__right">
        <FormOpening />
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
    padding: 120px 0 240px 0;
    display: grid;
    grid-template-columns: auto 460px;
    gap: 40px;
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
      left: 330px;
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
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    letter-spacing: 2.52px;
    text-transform: uppercase;
  }
}

</style>
