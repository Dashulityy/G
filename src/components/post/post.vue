<template>
    <div class="c-post">
        <div class="post__user">
            <usersPost :data="data"/>
        </div>
        <div class="post__card">
            <card :data="data"/>
        </div>
        <div class="comments">
            <feed
            :date="data.date"
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
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions({
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
