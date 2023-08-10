<script setup lang="ts">
defineProps<{
  labelText: string
}>()
const modelValue = defineModel()
</script>

<template>
  <label class="checkbox">
    {{ labelText }}
    <input
      v-model="modelValue"
      type="checkbox"
      class="checkbox__input"
      v-bind="$attrs"
    >
    <span class="checkbox__custom" />
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  height: 20px;
  cursor: pointer;
  user-select: none;

  font-size: 17px;
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    visibility: hidden;
    height: 0;
    width: 0;
  }

  &__custom {
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;

    &:after{
      content: "";
      position: absolute;
      display: none;
    }
  }

  &:hover input ~ &__custom {
    background-color: #ccc;
  }

  & input:checked ~ &__custom {
    background-color: $tree;
  }

  & input:checked ~ &__custom:after{
    display: block;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
}
</style>
