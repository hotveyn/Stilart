<script setup lang="ts">
defineProps<{
  labelText: string;
}>()
const modelValue = defineModel()
</script>

<template>
  <label class="w input">
    <span class="input__label-text">{{ labelText }}</span>

    <input v-model="modelValue" class="input__input w" v-bind="$attrs">
  </label>
</template>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &__label-text {
    font-size: 17px;
    font-weight: 500;
  }

  &__input {
    padding: 16px;
    border-radius: 2px;
    border: 1px solid $white;
    background-color: rgba(0, 0, 0, 0);
    color: $white;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;

    &:focus,
    &:active {
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 300;
    }
  }
}
</style>
