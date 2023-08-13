<script setup lang="ts">
import { reactive } from '#imports'

const props = defineProps<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  color: 'wood' | 'white';
}>()

const style = reactive({
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  width: props.width,
  height: props.height
})
</script>

<template>
  <span :class="[`base-line_${color}`]" :style="style" class="base-line" />
</template>

<style scoped lang="scss">
.base-line {
  opacity: 0.5;
  display: block;
  min-height: 1px;
  min-width: 1px;
  position: absolute;
  z-index: 0;

  &_wood {
    background-color: $tree;
  }

  &_white {
    background-color: $white;
  }
}
</style>
