<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import VaultList from './components/VaultList'

const { t, locale } = useI18n()

watch(locale, (newlocale) => {
  localStorage.setItem('locale', newlocale)
})
</script>

<template>
  <nav>
    <select v-model="locale">
      <option>zh-TW</option>
      <option>en</option>
    </select>
  </nav>
  <VaultList />
</template>

<style lang="sass">
html
  background: #244042
  color: white

#app
  margin: auto
  // max-width: 1280px
</style>
