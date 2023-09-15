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
                  Repositories
                </div>
                <div class="rightBlock__count">
                {{ user.public_repos }}
                </div>
              </div>
              <ul class="post-list">
                <li class="post__item" v-for="item in repos" :key="item.id">
                  <postRepos :data="getData(item)"/>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { headerNav } from '@/components/headerNav'
import { topline } from '../../components/topline'
import { logo } from '../../icons/variants'
// import { mapState, mapActions } from 'vuex'
import { profile } from '../../components/userProfile'
import { postRepos } from '../../components/postRepos'
// export default {
//   name: 'repos',
//   components: {
//     headerNav,
//     topline,
//     logo,
//     profile,
//     postRepos
//   },
//   methods: {
//     ...mapActions({
//       fetchRepos: 'repos/fetchRepos',
//       getUser: 'user/getUser'
//     }),
//     getData (item) {
//       return {
//         username: item.owner.login,
//         title: item.name,
//         description: item.description,
//         stars: item.stargazers_count,
//         forks: item.forks,
//         avatar: item.owner.avatar_url,
//         issues: item.data,
//         repos: item.name,
//         date: new Date(item.created_at),
//         id: item.id
//       }
//     }
//   },
//   computed: {
//     ...mapState({
//       repos: (state) => state.repos.data,
//       user: (state) => state.user.data
//     })
//   },
//   async created () {
//     try {
//       await this.fetchRepos()
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
    postRepos
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      try {
        dispatch('repos/fetchRepos')
        dispatch('user/getUser')
      } catch (e) {
        console.log(e)
      }
    })
    return {
      repos: computed(() => state.repos.data),
      user: computed(() => state.user.data),
      getData (item) {
        return {
          username: item.owner.login,
          title: item.name,
          description: item.description,
          stars: item.stargazers_count,
          forks: item.forks,
          avatar: item.owner.avatar_url,
          issues: item.data,
          repos: item.name,
          date: new Date(item.created_at),
          id: item.id
        }
      }
    }
  }
}
</script>
<style lang="scss" src="./repos.scss" scoped></style>
