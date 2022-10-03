<template>
<Popper hover placement="right" class="popper">
  <slot />
  <template #content>
    <div class="card">
      <div class="main">
        <div class="img">
          <lazyload-img :src="getImageUrl(`${props.dir}/${props.title}.webp`)" alt="" />
        </div>
        <div class="description">
          <p class="title">{{ $t(`${props.title}`) }}</p>
          <p class="context" v-html="$t(`${props.title}_context`)"></p>
          <p v-if="props.unique" class="unique">{{ $t('unique') }}</p>
        </div>
      </div>
      <div class="footer">
        <p v-for="aspect in props.aspects" class="aspects">
          <lazyload-img :src="getImageUrl(`aspects/${aspect.name}.webp`)" alt="" :class="{ 'scholar': textAspect(aspect.name) }" />
          <span v-if="aspect.level" class="level">{{ aspect.level}}</span>
        </p>
      </div>
    </div>
  </template>
</Popper>
</template>

<script setup>
import { defineComponent } from 'vue'
import { getImageUrl } from '../../scripts/get_image_url.js'
import Popper from 'vue3-popper'

const props = defineProps({
  dir: String,
  title: String,
  unique: Boolean,
  aspects: Array
})

const textAspect = name => name.startsWith('text') && (name.length > 4)
</script>

<style lang="sass" scoped>
:deep(.popper), :deep(.popper:hover)
  background: rgb(250,248,233) !important
  border: 1px solid black
  border-radius: 3px
  //display: block !important

.card
  width: 500px
  border: 1px solid black
  color: black

  .main
    display: flex
    padding: 14px

    .img
      flex: 0 0
      flex-basis: 60px
      height: 60px
      margin-left: -24px
      margin-right: 10px
      border: 2px solid black
      border-radius: 2px
      transform: rotate(-2deg)
      background: black

      img
        width: 100%
        height: 100%

    .description
      flex-grow: 1
      text-align: justify

      .title
        margin-bottom: 10px
        font-size: 16px
        font-weight: bold

      .context
        font-weight: 400
        line-height: 18px

      .unique
        margin-top: 10px

  .footer
    display: flex
    gap: 6px
    box-sizing: border-box
    background: #dcd3bd
    padding: 6px

    .aspects
      display: flex
      align-items: center
      margin: auto 0
      height: 26px
      font-size: 16px

      .scholar
        height: 100%
        transform: rotate(-3deg)

      .level
        margin-left: 2px

    .aspects:first-child
      margin-left: auto
</style>
