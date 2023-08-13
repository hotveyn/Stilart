<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'

defineEmits<{
  clickNav: [];
}>()
</script>

<template>
  <div class="menu" @click="$emit('clickNav')">
    <BaseNavigation type="wide" />
  </div>
</template>

<style scoped lang="scss">
.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  backdrop-filter: brightness(0.6);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
