<script setup lang="ts">
// TODO: gen
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="about__title h2">
        О нас
      </h2>
      <div class="about__items">
        <div class="about__item about-item">
          <div class="about-item__info">
            <h3 class="about-item__title h3">
              Наша компания предоставляет услуги по дизайну интерьеров.
            </h3>
            <div class="about-item__description">
              Мы берем на себя ответственность за расчеты и подбор материалов, чтобы клиенты могли
              быть уверены в прозрачности и точности всех затрат.
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
            <h3 class="about-item__title h3">
              Заходи и живи!
            </h3>
            <div class="about-item__description">
              Наша команда профессионалов работает в концепции "Под ключ" от дизайн-проекта до
              реализации, заходи и живи! Данный подход включает в себя спектр услуг дизайн-проект,
              отделочные работы, закупка и разработка мебели, декорирование, авторский контроль и
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
      <BaseButton class="about__link" type="flat" to="/about">
        Читать подробнее
      </BaseButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  &__items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }

  &__link {
    margin: 30px auto 0;
    color: black;
  }
}

.about-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  &__description {
    margin-top: 15px;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__image {
    border-radius: 2px;
  }
}
</style>
