<template>
    <div class="c-header-nav">
        <button class="icon-button">
            <icon name="home" @click="$router.push({ path: '/', params: {}})"/>
        </button>
        <button class="icon-button icon-button--avatar">
            <img class="avatar" :src="src" @click="$router.push({ path: '/repos', params: {}})">
        </button>
        <button class="icon-button">
            <icon name="exit" @click="logout"/>
        </button>
    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'headerNav',
  components: {
    icon
  },
  props: {
    avatarUrl: {
      type: String,
      required: true
      // default: 'https://p-hold.com/people/300/300'
    },
    src: {
      type: String
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
</script>
<style lang="scss" src="./headerNav.scss" scoped></style>
