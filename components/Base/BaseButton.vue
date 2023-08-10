<script setup lang="ts">

withDefaults(defineProps<{
  type: 'transparent' | 'flat',
  to?: string | undefined
}>(), { type: 'transparent' })

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <Component :is="to ? NuxtLink: 'button'" :to="to" :class="[`button_${type}`]" class="button">
    <slot />
  </Component>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 500;
  border-radius: 4px;

  &_transparent {
    border: 1px solid $white;
    background-color: rgba(0, 0, 0, 0);
    color: $white;
  }

  &_flat {
    width: fit-content;
    background-color: rgba(0, 0, 0, 0);
    color: $tree;
    font-size: 22px;
    transition: color .2s, background-color .2s;

  }
}
</style>
