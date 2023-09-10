<template>
    <div class="c-rating">
        <div class="rating__border rating__border--left rating__border--gray">
            <div class="rating__icon">
                <icon name="star" />
            </div>
            <span class="rating__title">Star</span>
        </div>
        <div class="rating__border rating__border--center rating__border--white">
            <span class="rating__value">{{ star }}</span>
        </div>
        <div class="rating__border rating__border--center rating__border--gray">
            <div class="rating__icon">
                <icon name="fork" />
            </div>
            <span class="rating__title">Fork</span>
        </div>
        <div class="rating__border rating__border--right">
            <span class="rating__value">{{ fork }}</span>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'rating',
  props: {
    star: {
      type: String,
      required: true,
      default: '156k'
    },
    fork: {
      type: Number,
      required: true,
      default: 4
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./rating.scss" scoped></style>
