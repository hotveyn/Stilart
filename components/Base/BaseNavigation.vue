<script setup lang="ts">
withDefaults(defineProps<{
  type: 'footer' | 'header'
}>(), { type: 'header' })
</script>

<template>
  <nav :class="[`nav_${type}`]" class="nav">
    <ul class="nav__items">
      <li class="nav__item">
        <a
          href="#about"
          class="a"
        >О нас</a>
      </li>
      <li class="nav__item">
        <a
          href="#stages"
          class="a"
        >Этапы работ</a>
      </li>
      <li class="nav__item">
        <a
          href="#services"
          class="a"
        >Услуги</a>
      </li>
      <li class="nav__item">
        <a
          href="#projects"
          class="a"
        >Проекты</a>
      </li>
      <li class="nav__item">
        <a
          href="#faq"
          class="a"
        >Вопрос ответ</a>
      </li>
      <li class="nav__item">
        <a
          href="#contacts"
          class="a"
        >Контакты</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;

  &__items {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  .a {
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
  }

  &_header {
    .a {
      color: white;
    }
  }

  &_footer {
    .a {
      color: black;
    }
  }
}
</style>
