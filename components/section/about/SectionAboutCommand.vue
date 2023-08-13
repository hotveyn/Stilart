<script setup lang="ts">
import { ref } from 'vue'

const members = ref([
  {
    id: 1,
    prof: 'Менеджер',
    img: 'member1.png',
    name: 'Алексей Петров Викторович'
  },
  {
    id: 2,
    prof: 'Инженер',
    img: 'member2.png',
    name: 'Михаил Кузнецов Александрович'
  },
  {
    id: 3,
    prof: 'Дизайнер',
    img: 'member3.png',
    name: 'Сергей Каменев Николаевич'
  }
])
</script>

<template>
  <section class="command">
    <div class="container-bg">
      <h2 class="command__title">
        Команда
      </h2>
      <p class="command__description">
        Наша команда профессионалов работает в концепции "Под ключ" от
        дизайн-проекта до реализации, заходи и живи! Данный подход включает в
        себя спектр услуг дизайн-проект, отделочные работы, закупка и разработка
        мебели, декорирование, авторский контроль и т.д. Свяжитесь с нами
        сегодня, чтобы узнать больше.
      </p>
      <div class="command__cards">
        <div
          v-for="member in members"
          :key="member.id"
          class="command__card command-card"
        >
          <img
            class="command-card__img"
            :src="`/images/members/${member.img}`"
            alt="Участник команды StilArt"
          >
          <div class="command-card__info">
            <h3 class="command-card__proff h3">
              {{ member.prof }}
            </h3>
            <p class="command-card__name">
              {{ member.name }}
            </p>
          </div>
        </div>
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        space-between="20px"
        :pagination="{
          type: 'progressbar'
        }"
        :loop="true"
        :gap="20"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }"
        class="command__cards_mob"
      >
        <SwiperSlide
          v-for="member in members"
          :key="member.id"
        >
          <div

            class="command__card command-card"
          >
            <img
              class="command-card__img"
              :src="`/images/members/${member.img}`"
              alt="Участник команды StilArt"
            >
            <div class="command-card__info">
              <h3 class="command-card__proff h3">
                {{ member.prof }}
              </h3>
              <p class="command-card__name">
                {{ member.name }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
.command {
  &__title {
    font-size: adpval(28, 36, 1682);
    font-style: normal;
    font-weight: 500;
    line-height: 52.2px;
    letter-spacing: 2.52px;
    text-transform: uppercase;
  }

  &__description {
    margin-top: 35px;
    font-size: adpval(20, 28, 1682);
    font-style: normal;
    font-weight: 500;
    width: min(1300px, 100%);
    line-height: 145%;
  }

  &__cards {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

@media (width < 1250px) {
  .command {
    &__cards {
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
  }
}

.command-card {
  position: relative;
  aspect-ratio: 480 / 360;
  width: adpval(300, 480, 1652);

  &__img {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
    padding: 5px 15px 15px 15px;
    color: white;
    background-color: $trnsp-tree;
  }

  &__proff {
    line-height: 100%;
    font-weight: 700;
    letter-spacing: 2px;
  }

  &__name {
    margin-top: 5px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1px;
  }
}

@media (width >= 780px) {
  .command__cards_mob {
    display: none;
  }
}

@media (width < 780px) {
  .command__cards_mob {
    display: block;
    width: adpval(300, 680, 780);
    margin: adpval(30, 100, 780) auto 0;
  }
  .command-card {
    position: relative;
    aspect-ratio: 480 / 360;
    width: adpval(300, 680, 780);
  }
  .command {
    &__cards {
      display: none;
    }
  }
}
.swiper-pagination-progressbar-fill{
  background: $tree !important;
}
</style>
