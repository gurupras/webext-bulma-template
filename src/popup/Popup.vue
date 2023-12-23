<script setup lang="ts">
import { storageDemo } from '~/logic/storage'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="dropdown is-active">
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <a class="dropdown-item" @click="openOptionsPage">
          <span class="icon-text">
            <cil-settings class="icon" />
            <span>Options</span>
          </span>
        </a>
        <a class="dropdown-item">
          Option 2
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.dropdown {
  width: 100%;

  .dropdown-menu {
    position: relative;
    width: 100%;
  }
}

.icon-text .icon:not(:last-child) {
  margin-right: 0.5em;
}
</style>