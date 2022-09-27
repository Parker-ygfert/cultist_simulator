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
                <div class="img"><img src="../assets/images/obstacles/peril.png" alt=""></div>
              </th>
              <th>
                <div class="img"><img src="../assets/images/obstacles/guardian.png" alt=""></div>
              </th>
              <th>
                <div class="img"><img src="../assets/images/obstacles/seal.png" alt=""></div>
              </th>
              <th>
                <div class="img"><img src="../assets/images/obstacles/curse.png" alt=""></div>
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
          <CardPopper
            dir="vaults"
            :title="vault.id"
            :unique="vault.unique"
            :aspects="vault.aspects"
          >
            <div class="img">
              <img :src="`src/assets/images/vaults/${vault.id}.png`" alt="">
            </div>
          </CardPopper>
        </td>
        <td class="obstacles">
          <div class="obstacles">
            <div v-for="key in Object.keys(vault.obstacles)" :set="obstacleRef = vault.obstacles[key]" class="obstacle">
              <div v-for="name in obstacleRef" class="name">
                <div class="img">
                  <img v-if="name" :src="`src/assets/images/obstacles/${name}.png`" alt="">
                  <div v-else="name" class="empty-name"></div>
                </div>
                <div :set="obstacle = obstacles.find(el => el.id === name)" class="overcomes">
                  <div v-if="obstacle" v-for="overcome in obstacle.overcomes" class="overcome">
                    <img v-if="overcome" :src="`src/assets/images/lores/${overcome}.png`" alt="">
                  </div>
                  <div v-else="obstacle" v-for="n in 3" class="overcome"></div>
                </div>
              </div>
            </div>
          </div>
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
          <div>
            <div v-for="ingredient in vault.ingredients" class="img">
              <img :src="`src/assets/images/ingredients/${ingredient}.png`" alt="">
            </div>
          </div>
        </td>
        <td class="other">
          <div>
            <div v-for="other in vault.other" class="img">
              <img v-if="other" :src="`src/assets/images/${other.dir}/${other.name}.png`" alt="">
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import CardPopper from './poppers/CardPopper'
import vaults from '../data/vaults.json'
import obstacles from '../data/obstacles.json'
</script>

<style lang="sass" src="../assets/styles/vault_list.sass"></style>
