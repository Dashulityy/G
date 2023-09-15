<template>
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
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="item in trendings" :key="item.id" :id="item.id">
            <user-stories :data=getStoryData(item)
                          @onPress="$router.push({name: 'stories', params: {id: item.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="container">
    <ul class="post-list">
      <li class="post__item">
        <post
        />
      </li>
    </ul>
    <!--<slider />-->
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../icons/variants'
import { userStories } from '../../components/userStories'
import { post } from '../../components/post'
import { headerNav } from '../../components/headerNav'
// import { slider } from '../../components/slider'
import { mapState, mapActions } from 'vuex'
// import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    userStories,
    post,
    headerNav
    // slider
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      starred: (state) => state.starred.data,
      user: (state) => state.user.data
    })
  },
  data () {
    return {
      items: {}
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      getUser: 'user/getUser'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userLogin: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created () {
    try {
      await this.fetchTrendings()
      await this.fetchStarred()
      await this.getUser()
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" src="./feeds.scss" scoped></style>
