<template>
    <div class="following__content">
        <div class="following__data">
            <img class="avatar" :src="avatar">
            <div class="following__info">
                <div class="following__login">{{ login }}</div>
                <div class="following__status"> {{ status }} </div>
            </div>
        </div>
        <div class="following__button">
          <xbutton>following</xbutton>
        </div>
    </div>
</template>
<script>
import { button as xbutton } from '../../components/button'
export default {
  components: {
    xbutton
  },
  props: {
    login: {
      type: String
    },
    status: {
      type: String
    },
    avatar: {
      type: String
    }
  }
}
</script>
<style lang="scss" src="./userFollowing.scss" scoped></style>
