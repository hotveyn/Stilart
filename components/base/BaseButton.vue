<script setup lang="ts">
withDefaults(
  defineProps<{
    type: 'transparent' | 'flat' | 'primary';
    to?: string | undefined;
  }>(),
  { type: 'transparent' }
)

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :class="[`button_${type}`]"
    class="button"
  >
    <slot />
  </Component>
</template>

<style scoped lang="scss">
.button {
  width: fit-content;
  cursor: pointer;
  display: flex;
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
    transition:
      color 0.2s,
      background-color 0.2s;
  }

  &_primary {
    background-color: $d-tree;
    border: 1px solid $d-tree;
    color: $white;
  }
}
</style>
