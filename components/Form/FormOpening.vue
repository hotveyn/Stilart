<script setup lang="ts">
import { ref } from 'vue'
const form = ref<HTMLInputElement | null>(null)
const nameF = ref<string>('')
const mailF = ref<string>('')
const checkboxF = ref<boolean>(false)
function goMail () {
  if (!form.value) {
    return
  }

  if (form.value.checkValidity()) {
    console.log('Form submitted successfully')
  } else {
    form.value.reportValidity()
  }
}
</script>

<template>
  <form ref="form" class="form-opening w">
    <p class="form-opening__title">
      Оставте заявку
    </p>
    <BaseInput v-model="nameF" required label-text="Имя" placeholder="Тихон" type="text" />
    <BaseInput
      v-model="mailF"
      required
      label-text="Электронная почта"
      placeholder="example@mail.ru"
      type="email"
    />
    <BaseCheckbox v-model="checkboxF" required label-text="Согласие на обработку перс. данных" />
    <BaseButton type="transparent" @click.prevent="goMail">
      Отправить
    </BaseButton>
  </form>
</template>

<style scoped lang="scss">
.form-opening {
  padding: 40px;
  background-color: $trnsp-tree;
  backdrop-filter: blur(5px);
  border-radius: 4px;
  border: 1px solid $white;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
