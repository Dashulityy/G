<template>
    <div class="c-post">
        {{ user }}
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
import { feed } from '../feed'
import { card } from '../card'
// import * as api from '../../api'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'post',
  components: {
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
      fetchIssues: 'starred/fetchIssuesForRepo',
      getUserRepos: 'user/getUserRepos'
    }),
    loadIssues ({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo })
    }
  },
  computed: {
    ...mapState({
      starred: (state) => state.starred.data,
      user: (state) => state.user.data
    })
  },
  async created () {
    try {
      await this.getUserRepos()
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" src="./userRepos.scss" scoped></style>
