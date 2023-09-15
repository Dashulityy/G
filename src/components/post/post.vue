<template>
    <div class="c-post" v-for="item in starred" :key="item.id">
        <div class="post__user">
            <usersPost v-bind="getData(item)"/>
        </div>
        <div class="post__card">
            <card v-bind="getData(item)"/>
        </div>
        <div class="comments">
            <feed
            :issues="item.issues?.data"
            :loading="item.issues?.loading"
            :date="new Date(item.created_at)"
            @loadContent="loadIssues({ id: item.id, owner: item.owner.login, repo: item.name })"
            />
        </div>
    </div>
</template>

<script>
import { usersPost } from '../usersPost'
import { feed } from '../feed'
import { card } from '../card'
// import * as api from '../../api'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'post',
  components: {
    usersPost,
    feed,
    card
  },
  data () {
    return {
      items: {}
    }
  },
  methods: {
    ...mapActions({
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssuesForRepo'
    }),
    loadIssues ({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo })
    },
    getData (item) {
      return {
        username: item.owner.login,
        title: item.name,
        description: item.description,
        stars: item.stargazers_count,
        forks: item.forks,
        avatar: item.owner.avatar_url
      }
    }
  },
  computed: {
    ...mapState({
      starred: (state) => state.starred.data
    })
  }
}
</script>
<style lang="scss" src="./post.scss" scoped></style>
