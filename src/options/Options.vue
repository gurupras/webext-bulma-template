<template>
  <main class="container">
    <div class="section">
      <div class="columns">
        <div class="column">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">localStorage['webext-demo']</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control has-icons-left">
                  <input v-model="storageDemo" class="input" />
                  <span class="icon is-small is-left">
                    <mdi-storage class="has-text-dark" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { storageDemo } from '~/logic/storage'
</script>