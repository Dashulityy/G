<template>
    <div class="c-slide" :class="{ active }">
      <div class="c-slide__container">
          <div class="slide__head">
              <div class="slide__progress">
                  <progressBar :active="active" @onFinish="$emit('onFinish')" />
              </div>
              <div class="slide__user">
                  <users :login="data.userLogin" :avatarUrl="data.userAvatar"/>
              </div>
          </div>
          <div class="slide__body">
              <div class="loader" v-if="loading">
                  <spinner />
              </div>
              <div class="content" v-else>
                  <div v-if="data.content?.length" class="slide__text" v-html="data.content"></div>
                  <div class="slide__content" v-else>
                      <slideContent />
                  </div>
              </div>
          </div>
          <div class="slide__footer">
            <xbutton @click="$emit(data.following.status ? 'onUnfollow': 'onFollow', data.id)" :theme="buttonTheme">
              <template #default>
                <span v-if="data.following.loading">
                  <!-- <Icon name="spinner" /> -->
                  <spinner />
                </span>
                <span v-else>
                  {{data.following.status ? 'Unfollow': 'Follow'}}
                </span>
              </template>
              </xbutton>
          </div>
      </div>
      <div class="btns" v-if="active">
        <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('prev')">
          <span class="icon">
            <icon class="icon-arrow" name="arrow" />
          </span>
        </button>
        <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('next')">
          <span class="icon">
            <icon class="icon-arrow" name="arrow" />
          </span>
        </button>
      </div>
  </div>
</template>

<script>
import { users } from '../users'
import { button as xbutton } from '../button'
import { progress as progressBar } from '../progress'
import { content as slideContent } from '../content'
import { icon } from '../../icons'
import { spinner } from '../spinner'

export default {
  components: {
    users,
    xbutton,
    progressBar,
    slideContent,
    icon,
    spinner
  },
  data () {
    return {}
  },
  emits: ['next', 'prev', 'onFinish', 'onFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    following: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    }
  },
  computed: {
    buttonTheme () {
      return this.data.following.status ? 'grey' : 'green'
    }
  },
  created () {
    console.log(this.data)
  }
}
</script>
<style lang="scss" src="./slide.scss" scoped></style>
