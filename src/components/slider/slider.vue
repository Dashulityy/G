<template>
  <div class="c-slider">
    <div class="c-slider__container">
      <ul class="slider__items" ref="slider">
        <li class="slider__item slide" v-for="(trending, ndx) in trendings" :key="trending.id" ref="item">
          <slide :data="getStoryData(trending)"
                 :active="slideNdx === ndx"
                 :loading="slideNdx === ndx && loading"
                 :btnsShown="activeBtns"
                 @next="handleSlide(ndx + 1)"
                 @prev="handleSlide(ndx - 1)"
                 @onFinish="handleSlide(ndx + 1)"
                 @onFollow="starRepo(trending.id)"
                 @onUnFollow="unStarRepo(trending.id)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slide } from '../slide'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'slider',
  components: {
    slide
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchReadme: 'fetchReadme',
      starRepo: 'starRepo',
      unStarRepo: 'unStarRepo'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userLogin: obj.owner?.login,
        content: obj.readme,
        loading: obj.loading,
        following: obj.following
      }
    },
    async fetchReadmeForActiveSlide () {
      // полуаем информацию для активного слайда
      console.log(this.trendings[this.slideNdx])
      const {
        id,
        owner,
        name
      } = this.trendings[this.slideNdx]
      await this.fetchReadme({
        id,
        owner: owner.login,
        repo: name
      })
    },
    moveSlider (slideNdx) {
      const {
        slider,
        item
      } = this.$refs
      // console.log(slider)
      // console.log(item)
      const slideWidth = parseInt(getComputedStyle(item[0]).getPropertyValue('width'), 10)
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
  }
}
</script>
<style lang="scss" src="./slider.scss"></style>
