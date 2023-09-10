<template>
    <button class="c-user-stories" @click="goToStories">
        <div class="avatar">
            <img :src="data.userAvatar" class="img" alt="username avatar" />
        </div>
        <div class="username">{{ data.userLogin }}</div>
    </button>
</template>

<script>
export default {
  name: 'userStories',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    goToStories () {
      this.$router.push(`/stories/${this.data.id}`)
    }
  }
}
</script>

<style src="./userStories.scss" lang="scss" scoped></style>
