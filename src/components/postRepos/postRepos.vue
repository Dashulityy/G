<template>
    <div class="c-post">
        <div class="post__card">
            <card v-bind="data"/>
        </div>
    </div>
</template>

<script>
import { card } from '../card'
export default {
  name: 'post',
  components: {
    card
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" src="./postRepos" scoped></style>
