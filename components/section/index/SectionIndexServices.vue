<script setup lang="ts">
import { IService } from '~/interfaces/IService'
import BaseLine from '~/components/base/BaseLine.vue'

const services: IService[] = [
  {
    id: 1,
    img: 'services1.png',
    title: 'Консультация',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 2,
    img: 'services2.png',
    title: 'Авторский контроль',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 3,
    img: 'services2.png',
    title: 'Перепланировка',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 4,
    img: 'services4.png',
    title: 'Снабжение',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 5,
    img: 'services5.png',
    title: 'Комплектация',
    description:
      'All Inclusive подразумевает, что после общения с клиентом всем процессом ремонта занимается дизайнер.'
  },
  {
    id: 6,
    img: 'services6.png',
    title: 'Поддержка',
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
    <BaseLine color="white" top="25%" width="80%" />
    <BaseLine color="white" left="30%" top="0" height="80%" />
    <BaseLine color="white" bottom="25%" right="0" width="80%" />
    <BaseLine color="white" right="30%" height="80%" />
  </section>
</template>

<style scoped lang="scss">
.services {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: adpval(30, 110) 0;
  background: linear-gradient(145deg, $tree, #e1c5a0);
  color: $white;

  &__content {
    z-index: 1;
  }

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
  overflow: hidden;
  border-radius: 4px;
  border: 2px solid #fff;
  max-width: 380px;

  &__title {
    position: absolute;
    font-size: adpval(22, 32);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    text-align: center;
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
    font-size: adpval(16, 21);
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
    font-size: adpval(16, 22);
    font-style: normal;
    font-weight: 500;
    text-align: center;
    background-color: $trnsp-tree;
    padding: adpval(10, 15) 0;
  }
}

@media (width < 1180px) {
  .services__title {
    text-align: center;
  }
  .services__cards {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}

@media (width < 630px) {
  .services__cards {
    grid-template-columns: 1fr;
  }
}
</style>
