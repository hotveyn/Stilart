<script setup lang="ts"></script>

<template>
  <div class="glass">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.glass {
  font-size: adpval(14, 22);
  line-height: 145%;
  letter-spacing: 1.1px;
}
</style>
