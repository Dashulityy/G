<template>
  <div class="profile__content">
    <img :src="avatar" class="avatar">
    <div class="profile__data">
      <div class="profile__login">{{ login }}</div>
      <div class="analytics">
        <div class="analytics__data">
          <router-link :to="{name: 'repos'}">
            <span class="analytics__numbers">{{ repos }}</span>
            <span class="analytics__link">reposts</span>
          </router-link>
        </div>
        <div class="analytics__data">
          <router-link :to="{name: 'following'}">
            <span class="analytics__numbers">{{ following }}</span>
            <span class="analytics__link active">watchers</span>
          </router-link>
        </div>
      </div>
      <div class="profile__name">{{ username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    },
    login: {
      type: String
    },
    repos: {
      type: String
    },
    following: {
      type: String
    },
    username: {
      type: String
    }
  }
}
</script>
<style lang="scss" src="./userProfile.scss" scoped></style>
