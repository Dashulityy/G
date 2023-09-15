<template>
    <div class="c-card">
        <div class="card__title">{{ title }}</div>
        <div class="card__desc">{{ description }}</div>
        <div class="card__rating">
          <rating :star="stars" :fork="forks"/>
        </div>
    </div>
</template>

<script>
import { rating } from '../rating'
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Vue.js'
    },
    stars: {
      type: Number
    },
    forks: {
      type: Number
    },
    description: {
      type: String,
      required: true,
      default: 'framework for building interactive web applications ⚡'
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  components: {
    rating
  }
}
</script>
<style lang="scss" src="./card.scss" scoped></style>
