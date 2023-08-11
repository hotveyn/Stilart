<script setup lang="ts">
withDefaults(
  defineProps<{
    type: 'footer' | 'header' | 'wide';
  }>(),
  { type: 'header' }
)
</script>

<template>
  <nav :class="[`nav_${type}`]" class="nav">
    <ul class="nav__items w">
      <li class="nav__item">
        <NuxtLink to="/" class="a">
          Главная
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/#about" class="a">
          О нас
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/#stages" class="a">
          Этапы работ
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/#services" class="a">
          Услуги
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/#projects" class="a">
          Проекты
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/#faq" class="a">
          Вопрос ответ
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/#contacts" class="a">
          Контакты
        </NuxtLink>
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

  &_wide {
    width: 100%;

  }

  &_wide &__items {
    width: 100%;
    justify-content: space-between;
    color: white;
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
