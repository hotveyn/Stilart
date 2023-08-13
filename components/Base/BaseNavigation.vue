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

  .a {
    font-size: adpval(14, 17, 1180, 700);
    font-style: normal;
    font-weight: 500;
  }

  &__items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: adpval(15, 35, 1180, 700);
  }

  &_wide {

    .a {
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      color: white;
    }
  }
  &_wide &__items{
    flex-direction: column;
    gap: 50px;
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
