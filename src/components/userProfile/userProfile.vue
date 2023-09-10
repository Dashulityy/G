<template>
  <div class="profile__content">
    <img :src="avatar" class="avatar">
    <div class="profile__data">
      <div class="profile__login">{{ login }}</div>
      <div class="analytics">
        <div class="analytics__data">
          <span class="analytics__numbers">{{ repos }}</span>
          <span class="analytics__link"
          @click="$router.push({ path: '/repos', params: {}})"
          >reposts</span>
        </div>
        <div class="analytics__data">
          <span class="analytics__numbers">{{ following }}</span>
          <span
          class="analytics__link active"
          @click="$router.push({ path: '/following', params: {}})"
          >watchers</span>
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
