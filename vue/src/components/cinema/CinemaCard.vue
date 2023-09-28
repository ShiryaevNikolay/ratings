<template>
  <div class="cinema-card">
    <el-row>
      <img class="cinema-card__image" :src="getPreviewUrl()"/>
    </el-row>
    <el-row>
      <span class="cinema-card__element cinema-card__element_title">{{ cinema.name }}</span>
    </el-row>
    <el-row>
      <span class="cinema-card__element">{{ cinema.year }}</span>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CinemaCard',
  props: {
    cinema: Object,
    default: () => (null)
  },
  computed: {
    getPreviewUrl () {
      return this.props.cinema.previewUrl
    }
  }
}
</script>

<style lang="less">
.cinema-card {
  padding-bottom: 16px;
  border: solid #DCDCDC;
  border-radius: 10px;

  &__image {
    max-width: 100%;
    border-radius: 8px 8px 0px 0px;
  }

  &__element {
    display: block;
    font-family: 'Courier New', Courier;
    margin-top: 8px;
    padding-left: 16px;
    padding-right: 16px;

    &_title {
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>