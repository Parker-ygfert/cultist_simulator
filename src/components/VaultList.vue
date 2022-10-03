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
                  <div class="img"><lazyload-img :src="getImageUrl(`aspects/${obstacle}.webp`)" alt="" /></div>
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
              <lazyload-img :src="getImageUrl(`vaults/${vault.id}.webp`)" alt="" />
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
                  :aspects="obstacle.aspects"
                >
                  <div class="img">
                    <lazyload-img :src="getImageUrl(`obstacles/${name}.webp`)" alt="" />
                  </div>
                </CardPopper>
                <div v-else="name" class="img">
                  <div class="empty-name"></div>
                </div>
                <div class="overcomes">
                  <CardPopper
                    v-if="obstacle"
                    v-for="overcome in obstacle.overcomes"
                    dir="aspects"
                    :title="overcome"
                  >
                    <div class="overcome">
                      <lazyload-img v-if="overcome" :src="getImageUrl(`aspects/${overcome}.webp`)" alt="" />
                    </div>
                  </CardPopper>
                  <div v-else="obstacle" v-for="n in 3" class="overcome"></div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td class="books">
          <div class="list">
            <CardPopper
              v-for="bookName in vault.books"
              :set="book = books.find(el => el.id === bookName)"
              dir="books"
              :title="bookName"
              :unique="book.unique"
              :aspects="book.aspects"
            >
              <div class="img">
                <lazyload-img :src="getImageUrl(`books/${bookName}.webp`)" alt="" />
              </div>
            </CardPopper>
          </div>
        </td>
        <td class="tools">
          <div class="list">
            <CardPopper
              v-for="toolName in vault.tools"
              :set="tool = tools.find(el => el.id === toolName) || {}"
              dir="tools"
              :title="toolName"
              :unique="tool.unique"
              :aspects="tool.aspects"
            >
              <div class="img">
                <lazyload-img :src="getImageUrl(`tools/${toolName}.webp`)" alt="" />
              </div>
            </CardPopper>
          </div>
        </td>
        <td class="ingredients">
          <div class="list">
            <CardPopper
              v-for="ingredient in vault.ingredients"
              dir="ingredients"
              :title="ingredient"
            >
              <div class="img">
                <lazyload-img :src="getImageUrl(`ingredients/${ingredient}.webp`)" alt="" />
              </div>
            </CardPopper>
          </div>
        </td>
        <td class="other">
          <div class="list">
            <CardPopper
              v-for="other in vault.other"
              :dir="other.dir"
              :title="other.name"
            >
              <div class="img">
                <lazyload-img :src="getImageUrl(`${other.dir}/${other.name}.webp`)" alt="" />
              </div>
            </CardPopper>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getImageUrl } from '@/scripts/get_image_url.js'
import CardPopper from './poppers/CardPopper'
import vaults from '@/data/vaults.json'
import obstacles from '@/data/obstacles.json'
import books from '@/data/books.json'
import tools from '@/data/tools.json'

const obstacleAspect = name => {
  return obstacles.find(el => el.id === name)
}
</script>

<style lang="sass" src="@/assets/styles/vault_list.sass" scoped></style>
