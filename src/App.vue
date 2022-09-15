<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

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
  <h1>{{ $t('msg') }}</h1>
</template>

<style scoped>
</style>
