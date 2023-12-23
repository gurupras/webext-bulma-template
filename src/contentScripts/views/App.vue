<script setup lang="ts">
import { useToggle } from '@vueuse/core'
const [show, toggle] = useToggle(false)
</script>

<template>
  <div class="root">
    <div class="cs-content" :class="{show}">
      <h1 class="title is-size-2">
        Vitesse WebExt
      </h1>
    </div>
    <button class="button is-link is-rounded" @click="toggle()">
      <pixelarticons-power class="block m-auto text-white text-lg" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/main.scss';
.root {
  position: fixed;
  bottom: 0;
  right: 0;
  user-select: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  .cs-content {
    background-color: white;
    color: #2e2e2e;
    transition: opacity 300ms;
    opacity: 0;
    &.show {
      opacity: 0.6;
    }
  }
}
</style>