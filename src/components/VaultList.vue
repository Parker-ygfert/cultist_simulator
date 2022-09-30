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
              <th v-for="obstacle in ['peril', 'guardian', 'seal', 'curse']">
                <CardPopper
                  dir="aspects"
                  :title="obstacle"
                >
                  <div class="img"><lazyload-img :src="getImageUrl(`aspects/${obstacle}.png`)" alt="" /></div>
                </CardPopper>
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
              <lazyload-img :src="getImageUrl(`vaults/${vault.id}.png`)" alt="" />
            </div>
          </CardPopper>
        </td>
        <td class="obstacles">
          <div class="obstacles">
            <div v-for="key in Object.keys(vault.obstacles)" :set="obstacleRef = vault.obstacles[key]" class="obstacle">
              <div v-for="name in obstacleRef" :set="obstacle = obstacles.find(el => el.id === name)" class="name">
                <CardPopper
                  v-if="name"
                  dir="obstacles"
                  :title="name"
                  :aspects="obstacle.aspect"
                >
                  <div class="img">
                    <lazyload-img :src="getImageUrl(`obstacles/${name}.png`)" alt="" />
                  </div>
                </CardPopper>
                <div v-else="name" class="img">
                  <div class="empty-name"></div>
                </div>
                <div class="overcomes">
                  <CardPopper
                    v-if="obstacle"
                    v-for="overcome in obstacle.overcomes"
                    dir="lores"
                    :title="overcome"
                  >
                    <div class="overcome">
                      <lazyload-img v-if="overcome" :src="getImageUrl(`lores/${overcome}.png`)" alt="" />
                    </div>
                  </CardPopper>
                  <div v-else="obstacle" v-for="n in 3" class="overcome"></div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td class="books">
          <div>
            <div v-for="book in vault.books" class="img">
              <lazyload-img :src="getImageUrl(`books/${book}.png`)" alt="" />
            </div>
          </div>
        </td>
        <td class="tools">
          <div>
            <div v-for="tool in vault.tools" class="img">
              <lazyload-img :src="getImageUrl(`tools/${tool}.png`)" alt="" />
            </div>
          </div>
        </td>
        <td class="ingredients">
          <div>
            <div v-for="ingredient in vault.ingredients" class="img">
              <lazyload-img :src="getImageUrl(`ingredients/${ingredient}.png`)" alt="" />
            </div>
          </div>
        </td>
        <td class="other">
          <div>
            <div v-for="other in vault.other" class="img">
              <lazyload-img v-if="other" :src="getImageUrl(`${other.dir}/${other.name}.png`)" alt="" />
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

const obstacleAspect = name => {
  return obstacles.find(el => el.id === name)
}
</script>

<style lang="sass" src="../assets/styles/vault_list.sass" scoped></style>
