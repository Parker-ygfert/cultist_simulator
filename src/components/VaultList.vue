<template>
<div class="vault-list">
  <table>
    <thead>
      <tr>
        <th>{{ $t('location') }}</th>
        <th class="obstacles">
          <table>
            <tr>
              <th colspan="4" class="title">{{ $t('obstacles') }}</th>
            </tr>
            <tr>
              <th>
                <div class="img"><img src="../assets/images/vaults/peril.png" alt=""></div>
              </th>
              <th>
                <div class="img"><img src="../assets/images/vaults/guardian.png" alt=""></div>
              </th>
              <th>
                <div class="img"><img src="../assets/images/vaults/seal.png" alt=""></div>
              </th>
              <th>
                <div class="img"><img src="../assets/images/vaults/curse.png" alt=""></div>
              </th>
            </tr>
          </table>
        </th>
        <th>{{ $t('books') }}</th>
        <th>{{ $t('tools') }}</th>
        <th>{{ $t('ingredients') }}</th>
        <th>{{ $t('other') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="vault in vaults">
        <td class="location">
          <VaultCapital3>
            <div class="img">
              <img :src="`src/assets/images/vaults/${vault.id}.png`" alt="">
            </div>
          </VaultCapital3>
        </td>
        <td class="obstacles">
          <table>
            <tr>
              <td colspan="3" v-for="key in Object.keys(vault.obstacles)" :set="obstacle = vault.obstacles[key]">
                <div class="img">
                  <img v-if="obstacle.name" :src="`src/assets/images/vaults/${obstacle.name}.png`" alt="">
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3" v-for="key in Object.keys(vault.obstacles)" :set="obstacle = vault.obstacles[key]">
                <div class="aspects">
                  <div v-for="overcome in obstacle.overcomes" class="img">
                    <img v-if="overcome" :src="`src/assets/images/lores/${overcome}.png`" alt="">
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </td>
        <td class="books">
          <div>
            <div v-for="book in vault.books" class="img">
              <img :src="`src/assets/images/books/${book}.png`" alt="">
            </div>
          </div>
        </td>
        <td class="tools">
          <div>
            <div v-for="tool in vault.tools" class="img">
              <img :src="`src/assets/images/tools/${tool}.png`" alt="">
            </div>
          </div>
        </td>
        <td class="ingredients">
          <div v-for="ingredient in vault.ingredients" class="img">
            <img :src="`src/assets/images/ingredients/${ingredient}.png`" alt="">
          </div>
        </td>
        <td class="other">
          <div>
            <div v-for="other in vault.other" class="img">
              <img v-if="other" :src="`src/assets/images/vaults/${other}.png`" alt="">
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import vaultData from '../data/vaults.json'

const vaults = ref(vaultData)
</script>

<style lang="sass" scoped>
div.vault-list
  margin: auto
  max-width: max-content
  overflow: scroll

  th, td
    box-sizing: border-box
    border-top: 2px solid white
    border-bottom: 2px solid white
    border-left: 1px solid white
    border-right: 1px solid white
    text-align: center

  th
    padding: .1rem 0
    text-transform: capitalize
    &.obstacles
      padding: 0

    table
      width: 100%

      th.title
        margin: auto
        border-top: none
        border-left: none
        border-right: none
        border-bottom-width: 1px

      tr:last-child
        padding: 0

        th
          padding: 0
          border-top: none
          border-bottom: none

          &:first-child
            border-left: none
          &:last-child
            border-right: none

          .img
            margin: auto
            text-align: center
            width: 83px
            height: 30px

            img
              width: 30px

  td
    &.location
      .img
        width: 120px
        height: 114px

    &.obstacles
      tr:first-child
        td
          border-bottom-width: 1px

    tr:last-child
      td
        border-bottom: none

    td
      border-top: none

      .img
        width: 83px
        height: 83px

    .aspects
      display: flex

      .img
        border-left: .5px solid white
        border-right: .5px solid white
        width: 27px
        height: 27px

        &:first-child
          border-left: none
        &:last-child
          border-right: none

    &.books, &.tools, &.ingredients, &.other
      div
        display: flex

      .img
        width: 73px
        height: 73px

  img
    width: 100%
    height: 100%
</style>
