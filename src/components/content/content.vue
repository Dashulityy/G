<template>
    <div class="slide__content">
        <div class="slide__img">
            <img :src="slideImg" alt="slide image" />
        </div>
        <div class="slide__text">
            {{ slideText }}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    slideImg: {
      type: String,
      default: 'https://p-hold.com/people/400/400'
    },
    slideText: {
      type: String,
      default: "The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions. For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."
    }
  }
}
</script>
<style lang="scss" src="./content.scss" scoped></style>
