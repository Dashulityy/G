<template>
    <div class="c-users">
        <div class="users__avatar">
            <img :src="avatar" alt="user avatar" class="users__img">
        </div>
        <div class="users__login">
            {{ username }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'users',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" src="./userPost.scss" scoped></style>
