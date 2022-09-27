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
              <img :src="getImageUrl(`vaults/${vault.id}.png`)" alt="">
            </div>
          </CardPopper>
        </td>
        <td class="obstacles">
          <div class="obstacles">
            <div v-for="key in Object.keys(vault.obstacles)" :set="obstacleRef = vault.obstacles[key]" class="obstacle">
              <div v-for="name in obstacleRef" class="name">
                <div class="img">
                  <img v-if="name" :src="getImageUrl(`obstacles/${name}.png`)" alt="">
                  <div v-else="name" class="empty-name"></div>
                </div>
                <div :set="obstacle = obstacles.find(el => el.id === name)" class="overcomes">
                  <div v-if="obstacle" v-for="overcome in obstacle.overcomes" class="overcome">
                    <img v-if="overcome" :src="getImageUrl(`lores/${overcome}.png`)" alt="">
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
              <img :src="getImageUrl(`books/${book}.png`)" alt="">
            </div>
          </div>
        </td>
        <td class="tools">
          <div>
            <div v-for="tool in vault.tools" class="img">
              <img :src="getImageUrl(`tools/${tool}.png`)" alt="">
            </div>
          </div>
        </td>
        <td class="ingredients">
          <div>
            <div v-for="ingredient in vault.ingredients" class="img">
              <img :src="getImageUrl(`ingredients/${ingredient}.png`)" alt="">
            </div>
          </div>
        </td>
        <td class="other">
          <div>
            <div v-for="other in vault.other" class="img">
              <img v-if="other" :src="getImageUrl(`${other.dir}/${other.name}.png`)" alt="">
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
import { getImageUrl } from '../scripts/get_image_url.js'
import CardPopper from './poppers/CardPopper'
import vaults from '../data/vaults.json'
import obstacles from '../data/obstacles.json'
</script>

<style lang="sass" src="../assets/styles/vault_list.sass"></style>
