<template>
<button :class="['c-button', `theme-${theme}`]" >
    <span class="button__text">
      <slot></slot>
    </span>
</button>
</template>

<script>
export default {
  data () {
    return {
      isFollow: false
    }
  },
  props: {
    theme: {
      type: String,
      default: 'green'
    }
  }
}
</script>
<style lang="scss" src="./button.scss" scoped></style>
