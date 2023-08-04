<script setup lang="ts"></script>

<template>
  <header class="header w">
    <div class="container header__content">
      <img src="/images/logo/logo.svg" alt="" class="header__logo" />
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="" class="nav__a">О нас</a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__a">Этапы работ</a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__a">Услуги</a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__a">Проекты</a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__a">Вопрос ответ</a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__a">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  &__content {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}
</style>
