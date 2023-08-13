<script setup lang="ts"></script>

<template>
  <section class="our">
    <div class="container-bg">
      <h1 class="our__title h2">
        Наша компания предоставляет услуги по дизайну интерьеров.
      </h1>
      <p class="our__description">
        Мы берем на себя ответственность за расчеты и подбор материалов, чтобы
        клиенты могли быть уверены в прозрачности и точности всех затрат.
      </p>
      <div class="our__images">
        <img
          src="/images/projects/projects2.png"
          alt="our"
          class="our__image our__image_1"
        >
        <img
          src="/images/projects/projects1.png"
          alt="our"
          class="our__image our__image_2"
        >
        <img
          src="/images/projects/projects3.png"
          alt="our"
          class="our__image our__image_3"
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.our {
  &__title {
    text-transform: none;
  }

  &__description {
    width: min(880px, 100%);
    margin-top: 55px;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__images {
    margin-top: 215px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__image {
    aspect-ratio: 480 / 360;
    width: 440px;
    transition: transform 2s;
    transform-origin: 0 0;

    &_2 {
      animation: trnsf2 0.5s ease-in-out forwards;
      animation-delay: 0.5s;
    }

    &_3 {
      animation: trnsf3 0.5s ease-in-out forwards;
      animation-delay: 1s;
    }
  }
}

@keyframes trnsf2 {
  from {
    transform: translateY(0);
  }
  50% {
  }
  to {
    transform: translateY(-50%);
  }
}

@keyframes trnsf3 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
