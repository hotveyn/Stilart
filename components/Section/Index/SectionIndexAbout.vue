<script setup lang="ts">
// TODO: gen
import BaseButton from '~/components/base/BaseButton.vue'
import BaseLine from '~/components/base/BaseLine.vue'
</script>

<template>
  <section id="about" class="about w">
    <div class="container about__content">
      <h2 class="about__title">
        О нас
      </h2>
      <div class="about__items">
        <div class="about__item about-item">
          <div class="about-item__info">
            <h3 class="about-item__title">
              Наша компания предоставляет услуги по дизайну интерьеров.
            </h3>
            <div class="about-item__description">
              Мы берем на себя ответственность за расчеты и подбор материалов,
              чтобы клиенты могли быть уверены в прозрачности и точности всех
              затрат.
            </div>
          </div>
          <img
            src="/images/example/example1.png"
            alt="example1"
            class="about-item__image"
          >
        </div>
        <div class="about__item about-item">
          <div class="about-item__info">
            <h3 class="about-item__title ">
              Заходи и живи!
            </h3>
            <div class="about-item__description">
              Наша команда профессионалов работает в концепции "Под ключ" от
              дизайн-проекта до реализации, заходи и живи! Данный подход
              включает в себя спектр услуг дизайн-проект, отделочные работы,
              закупка и разработка мебели, декорирование, авторский контроль и
              т.д.Свяжитесь с нами сегодня, чтобы узнать больше.
            </div>
          </div>
          <img
            src="/images/example/example2.png"
            alt="example2"
            class="about-item__image"
          >
        </div>
      </div>
      <BaseButton class="about__link" type="primary" to="/about">
        Читать подробнее
      </BaseButton>
    </div>
    <BaseLine color="wood" width="45%" bottom="55%" />
    <BaseLine color="wood" width="50%" top="10%" right="0" />
    <BaseLine color="wood" width="85%" bottom="10%" right="0" />
  </section>
</template>

<style scoped lang="scss">
.about {
  position: relative;

  &__title {
    font-size: adpval(28, 36);
    font-style: normal;
    font-weight: 500;
    line-height: 52.2px;
    letter-spacing: 2.52px;
    text-transform: uppercase;
  }

  &__content {
    z-index: 1;
  }

  &__items {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }

  &__link {
    margin: 30px auto 0;
  }
}

.about-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &__title {
    font-size: adpval(24, 32);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  &__description {
    margin-top: 15px;
    font-size: adpval(18, 24, 1180, 700);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__image {
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
    width: adpval(300, 480, 1180, 700);
  }
}

@media (width < 700px) {
  .about-item {
    flex-direction: column;

    &:nth-child(2n) {
      flex-direction: column;
    }

    &__image{
      width: 100%;
    }
  }
}
</style>
