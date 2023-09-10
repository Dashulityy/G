<template>
    <div class="c-stories">
        <header class="header">
            <div class="x-container">
                <button class="logo" @click="$router.push('/')">
                    <icon name="logo"/>
                </button>
                <button class="close-btn"  @click="logout">
                    <icon name="exit" />
                </button>
            </div>
        </header>
        <div class="content">
            <slider :initialSlide="Number($route.params.id)" />
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
import { slider } from '../../components/slider'
export default {
  name: 'stories',
  components: {
    icon,
    slider
  },
  methods: {
    goToFeeds () {
      this.$router.push('/')
    },
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
</script>

<style src="./stories.scss" lang="scss" scoped></style>
