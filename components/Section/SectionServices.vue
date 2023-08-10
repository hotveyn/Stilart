<script setup lang="ts">
import { IService } from '~/interfaces/IService'

const services: IService[] = [
  {
    id: 1,
    img: 'services1.png',
    title: 'title',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 2,
    img: 'services2.png',
    title: 'title',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 3,
    img: 'services2.png',
    title: 'title',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 4,
    img: 'services4.png',
    title: 'title',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 5,
    img: 'services5.png',
    title: 'title',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 6,
    img: 'services6.png',
    title: 'title',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  }
]
</script>

<template>
  <section id="services" class="services">
    <div class="container services__content">
      <h2 class="h2 services__title">
        Услуги
      </h2>
      <div class="services__cards">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="`service/${service.id}`"
          class="service__card service-card"
        >
          <img
            :src="`/images/services/${service.img}`"
            alt="service"
            class="service-card__image"
          >
          <div class="service-card__front">
            <h3 class="h3 service-card__title">
              {{ service.title }}
            </h3>
          </div>
          <div class="service-card__back">
            <p class="service-card__description">
              {{ service.description }}
            </p>
            <p class="service-card__more">
              Подробнее
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services {
  width: 100%;
  padding: 110px 0;
  background-color: $tree;
  color: $white;

  &__cards {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.service-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid #fff;
  max-width: 380px;

  &__title {
    position: absolute;
  }

  &__image {
    width: 100%;
    filter: brightness(0.65);
    object-fit: cover;
  }

  &__back {
    opacity: 0;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
  }

  &:hover > &__back {
    opacity: 1;
  }

  &__front {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
  }

  &:hover > &__front {
    opacity: 0;
  }

  &__description {
    text-align: center;
    position: absolute;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    transition: transform 0.2s;
    transform: translateY(10px);
  }

  &:hover &__description {
    transform: translateY(0);
  }

  &__more {
    position: absolute;
    width: 100%;
    bottom: 0;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    background-color: $trnsp-tree;
    padding: 15px 0;
  }
}
</style>
