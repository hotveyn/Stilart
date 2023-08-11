<script setup lang="ts">
import BaseLine from '~/components/base/BaseLine.vue'
</script>

<template>
  <div id="contacts" class="contacts">
    <div class="container contacts__content">
      <h2 class="h2 contacts__title">
        Контакты
      </h2>
      <div class="contacts__dual">
        <div class="contacts__info">
          <div class="contacts__section">
            <h3 class="h3 contacts__subtitle">
              Юридическая информация
            </h3>
            <div class="contacts__items">
              <p class="contacts__item">
                ИП Трусевич В. Е.
              </p>
              <p class="contacts__item">
                ИНН 773136740121
              </p>
              <p class="contacts__item">
                ОГРНИП 321774600705557
              </p>
              <p class="contacts__item">
                Р/с 40802810401500240363
              </p>
              <p class="contacts__item">
                в банке ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"
              </p>
              <p class="contacts__item">
                г. Москва
              </p>
              <p class="contacts__item">
                БИК 044525999
              </p>
              <p class="contacts__item">
                К/с 30101810845250000999
              </p>
            </div>
          </div>
          <div class="contacts__section">
            <h3 class="h3 contacts__subtitle">
              Соц. Сети
            </h3>
            <div class="contacts__items contacts__items_horizontal">
              <p class="contacts__item">
                <a href="#">Instagram</a>
              </p>
              <p class="contacts__item">
                <a href="#">Telegram</a>
              </p>
              <p class="contacts__item">
                <a href="#">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>
        <img class="contacts__map" src="/images/example/map.png" alt="map">
      </div>
    </div>
    <BaseLine color="white" top="20%" width="100%" />
    <BaseLine color="white" bottom="22%" width="60%" />
  </div>
</template>

<style scoped lang="scss">
.contacts {
  position: relative;
  padding: 110px 0;
  background-color: $tree;
  color: $white;

  &__content {
    z-index: 2;
  }

  &__dual {
    height: 590px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 95px;
  }

  &__info {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 505px;
  }

  &__items {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &_horizontal {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &__items {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__map {
    max-height: 590px;
  }
}
</style>
