<script setup lang="ts">
</script>

<template>
  <Transition name="fadesemi">
    <slot />
  </Transition>
</template>

<style scoped lang="scss">
.fadesemi-enter-active,
.fadesemi-leave-active {
  transition: opacity 0.5s ease;
}

.fadesemi-enter-from,
.fadesemi-leave-to {
  opacity: .5;
}
</style>
