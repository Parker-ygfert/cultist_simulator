<template>
<Popper hover placement="right" class="popper">
  <slot />
  <template #content>
    <div class="card">
      <div class="main">
        <div class="img">
          <img :src="`src/assets/images/${props.dir}/${props.title}.png`" alt="">
        </div>
        <div class="description">
          <p class="title">{{ $t(`${props.title}`) }}</p>
          <p class="context">{{ $t(`${props.title}_context`) }}</p>
          <p v-if="props.unique" class="unique">{{ $t('unique') }}</p>
        </div>
      </div>
      <div class="footer">
        <p v-for="aspect in props.aspects" class="aspects">
          <img :src="`src/assets/images/aspects/${aspect.name}.png`" alt="">
          {{ aspect.level || null }}
        </p>
      </div>
    </div>
  </template>
</Popper>
</template>

<script setup>
import { defineComponent } from 'vue'
import Popper from 'vue3-popper'
const props = defineProps({
  dir: String,
  title: String,
  unique: Boolean,
  aspects: Array
})
</script>

<style lang="sass" scoped>
:deep(.popper), :deep(.popper:hover)
  background: rgb(250,248,233)
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
        line-height: 18px
      .unique
        margin-top: 10px
  .footer
    display: flex
    gap: 6px
    box-sizing: border-box
    background: #dcd3bd
    padding: 0 10px
    height: 40px
    .aspects
      margin: auto 0
      width: 26px
      height: 26px
      img
        width: 100%
        height: 100%
    .aspects:first-child
      margin-left: auto
</style>
