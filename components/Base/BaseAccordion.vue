<script setup lang="ts">
import { ref } from 'vue'
import { IAccordion } from '~/interfaces/IAccordion'

defineProps<{
  accordion: IAccordion;
}>()

const isShowDescription = ref<boolean>(false)
const description = ref<HTMLInputElement | null>(null)

function changeDescriptionVisibility () {
  if (description.value === null) {
    return
  }

  isShowDescription.value = !isShowDescription.value
  if (isShowDescription.value) {
    description.value.style.maxHeight = description.value.scrollHeight + 'px'
  } else {
    description.value.style.maxHeight = '0'
  }
}
</script>

<template>
  <div class="accordion" @click="changeDescriptionVisibility">
    <div class="accordion__head">
      <p class="accordion__title">
        {{ accordion.id + '. ' + accordion.title }}
      </p>
      <div class="accordion__arrow">
        <img
          v-show="isShowDescription"
          src="../../assets/icons/up.svg"
          alt="up"
        >
        <img
          v-show="!isShowDescription"
          src="../../assets/icons/down.svg"
          alt="down"
        >
      </div>
    </div>
    <p ref="description" class="accordion__description">
      <br>
      {{ accordion.text }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.accordion {
  cursor: pointer;
  padding: adpval(6, 12) adpval(10, 16) adpval(6, 12) adpval(18, 24);
  border-radius: 4px;
  border: 1.5px solid $black;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: adpval(20, 28);
    font-weight: 500;
  }

  &__description {
    font-size: adpval(16, 24);
    font-style: normal;
    font-weight: 500;
    line-height: 105%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s;
  }
}
</style>
