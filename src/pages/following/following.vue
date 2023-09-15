<template>
    <div class="c-repos">
        <div class="topline">
            <topline>
              <template #headline>
                <div class="logo">
                  <logo @click="$router.push({ path: '/', params: {}})"/>
                </div>
                <div class="navigation">
                  <headerNav :src="user.avatar_url"/>
                </div>
              </template>
            </topline>
        </div>
        <div class="content">
            <div class="leftBlock">
              <div class="profile">
                <div class="profile__head repoTitle">My profile</div>
                <div class="profile__info">
                  <profile
                  :avatar="user.avatar_url"
                  :login="user.login"
                  :repos="user.public_repos"
                  :following="user.following"
                  :username="user.name"
                  />
                </div>
              </div>
            </div>
            <div class="rightBlock">
              <div class="rightBlock__header">
                <div class="rightBlock__title repoTitle">
                  Following
                </div>
                <div class="rightBlock__count">
                  {{ user.following }}
                </div>
              </div>
              <ul class="post-list">
                <li class="post__item" v-for="item in followings" :key="item.id">
                  <following
                  :login="item.login"
                  :status="item.type"
                  :avatar="item.avatar_url"
                  />
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { headerNav } from '@/components/headerNav'
import { following } from '@/components/userFollowing'
import { topline } from '../../components/topline'
import { logo } from '../../icons/variants'
// import { mapState, mapActions } from 'vuex'
import { profile } from '../../components/userProfile'
// export default {
//   name: 'repos',
//   components: {
//     headerNav,
//     following,
//     topline,
//     logo,
//     profile
//   },
//   computed: {
//     ...mapState({
//       user: (state) => state.user.data,
//       followings: (state) => state.followings.data
//     })
//   },
//   methods: {
//     ...mapActions({
//       getUserFollowing: 'followings/getUserFollowing',
//       getUser: 'user/getUser'
//     })
//   },
//   async created () {
//     try {
//       await this.getUserFollowing()
//       await this.getUser()
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: {
    headerNav,
    topline,
    logo,
    profile,
    following
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      try {
        dispatch('followings/getUserFollowing')
        dispatch('user/getUser')
      } catch (e) {
        console.log(e)
      }
    })
    return {
      user: computed(() => state.user.data),
      followings: computed(() => state.followings.data)
    }
  }
}
</script>
<style lang="scss" src="./following.scss" scoped></style>
