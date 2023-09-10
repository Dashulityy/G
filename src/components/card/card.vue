<template>
    <div class="c-card">
        <div class="card__title">{{ data.title }}</div>
        <div class="card__desc">{{ data.description  }}</div>
        <div class="card__rating">
          <rating :star="data.stars" :fork="data.forks"/>
        </div>
    </div>
</template>

<script>
import { rating } from '../rating'
export default {
  name: 'card',
  props: {
    cardTitle: {
      type: String,
      required: true,
      default: 'Vue.js'
    },
    cardDescTitle: {
      type: String,
      required: true,
      default: 'JavaScript '
    },
    cardDesc: {
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
