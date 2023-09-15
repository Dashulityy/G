<template>
  <div class="c-feed">
    <div class="toggler">
      <toggler @onToggle="toggle" />
    </div>
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments__item" v-for="issue in issues" :key="issue.id">
          <comment :username="issue.user.login" :text="issue.title" />
        </li>
      </ul>
    </div>
    <div class="date">{{ PostDate }}</div>
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
// import commentsData from './data.json'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment
  },
  emits: ['loadContent'],
  data () {
    return {
      shown: false
    }
  },
  props: {
    date: {
      type: Date
    },
    loading: {
      type: Boolean
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
      if (isOpened && this.issues.length === 0) {
        this.$emit('loadContent')
      }
    }
  },
  computed: {
    PostDate () {
      const date = new Date(this.date)
      return date.toLocaleString('en-EN', { month: 'short', day: 'numeric' })
    }
  }
}
</script>
<style lang="scss" src="./feed.scss" scoped></style>
