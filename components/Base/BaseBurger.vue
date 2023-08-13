<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>()
</script>

<template>
  <div class="burger" :class="{ open: isOpen }">
    <span />
    <span />
    <span />
  </div>
</template>

<style scoped lang="scss">
.burger {
  width: 35px;
  height: 30px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.burger span {
  background-color: #fff;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 4px;
  transition-duration: 500ms;
}
.burger span:nth-child(1) {
  top: 0px;
  left: 0px;
}
.burger span:nth-child(2) {
  top: 13px;
  left: 0px;
  opacity: 1;
}
.burger span:nth-child(3) {
  bottom: 0px;
  left: 0px;
}
.burger:not(.open):hover span:nth-child(1) {
  transform: rotate(-3deg) scaleY(1.1);
}
.burger:not(.open):hover span:nth-child(2) {
  transform: rotate(3deg) scaleY(1.1);
}
.burger:not(.open):hover span:nth-child(3) {
  transform: rotate(-4deg) scaleY(1.1);
}
.burger.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 13px;
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 13px;
}
</style>
