<script setup lang="ts">
import BaseAccordion from '~/components/base/BaseAccordion.vue'
import { IAccordion } from '~/interfaces/IAccordion'

// TODO: заполнить
const accordions: IAccordion[] = [
  {
    id: 1,
    title: 'Сколько стоит ремонт?',
    text: 'На объекте трудятся специалисты, чьи профессиональные навыки ориентированы на конкретную область, с опытом работы от 5 лет и более.'
  },
  {
    id: 2,
    title: 'Сколько стоит ремонт?',
    text: 'На объекте трудятся специалисты, чьи профессиональные навыки ориентированы на конкретную область, с опытом работы от 5 лет и более.'
  },
  {
    id: 3,
    title: 'Сколько стоит ремонт?',
    text: 'На объекте трудятся специалисты, чьи профессиональные навыки ориентированы на конкретную область, с опытом работы от 5 лет и более.'
  },
  {
    id: 4,
    title: 'Сколько стоит ремонт?',
    text: 'На объекте трудятся специалисты, чьи профессиональные навыки ориентированы на конкретную область, с опытом работы от 5 лет и более.'
  },
  {
    id: 5,
    title: 'Сколько стоит ремонт?',
    text: 'На объекте трудятся специалисты, чьи профессиональные навыки ориентированы на конкретную область, с опытом работы от 5 лет и более.'
  }
]
</script>

<template>
  <section id="faq" class="faq w">
    <div class="container faq__content">
      <h2 class="h2 faq__title">
        Вопрос ответ
      </h2>
      <div class="faq__accordions">
        <BaseAccordion
          v-for="accordion in accordions"
          :key="accordion.id"
          :accordion="accordion"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  &__accordions {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
</style>
