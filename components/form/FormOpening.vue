<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseCheckbox from '~/components/base/BaseCheckbox.vue'
import BaseButton from '~/components/base/BaseButton.vue'

const buttonText = ref<
  | 'Отправить'
  | 'Ошибка. Попробуйте позже'
  | 'Успешно отправлено'
  | 'Идёт отправка...'
  | 'Не всё заполненно!'
>('Отправить')
const form = ref<HTMLInputElement | null>(null)
const nameF = ref<string>('')
const mailF = ref<string>('')
const phoneF = ref<string>('')
const checkboxF = ref<boolean>(false)

async function goMail () {
  if (!form.value) {
    return
  }

  if (form.value.checkValidity()) {
    buttonText.value = 'Идёт отправка...'
    try {
      await fetch('/mail/send', {
        method: 'POST',
        body: JSON.stringify({
          from: 'vasilvaluev@mail.ru',
          subject: 'Заполнена заявка с сайта StilArt',
          text: `Имя: ${nameF.value}. Почта: ${mailF.value}. Телефон: ${phoneF.value}`
        })
      })
      buttonText.value = 'Успешно отправлено'
    } catch (e) {
      buttonText.value = 'Ошибка. Попробуйте позже'
    }
  } else {
    buttonText.value = 'Не всё заполненно!'
    setTimeout(() => {
      buttonText.value = 'Отправить'
    }, 3000)
    form.value.reportValidity()
  }
}
</script>

<template>
  <form ref="form" class="form-opening w">
    <p class="form-opening__title">
      Оставте заявку
    </p>
    <BaseInput
      v-model="nameF"
      required
      label-text="Имя"
      placeholder="Тихон"
      type="text"
    />
    <BaseInput
      v-model="mailF"
      required
      label-text="Электронная почта"
      placeholder="example@mail.ru"
      type="email"
    /><BaseInput
      v-model="phoneF"
      v-maska
      data-maska="+7 (###) ###-##-##"
      required
      pattern="^(?:\+7\s)?\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
      label-text="Номер телефона"
      placeholder="7 (999) 999-99-99"
      type="text"
    />
    <BaseCheckbox
      v-model="checkboxF"
      required
      label-text="Согласие на обработку перс. данных"
    />
    <BaseButton class="w" type="transparent" @click.prevent="goMail">
      {{ buttonText }}
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
