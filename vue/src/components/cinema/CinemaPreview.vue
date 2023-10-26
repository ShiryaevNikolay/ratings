<template>
  <div class="cinema-preview">
    <img :src="cinema.previewUrl" class="cinema-preview__image"/>
    <div class="cinema-preview__name">{{ cinema.name }}</div>
    <div>{{ cinema.date | dateFormat }}</div>
    <div class="cinema-preview__author">{{ cinema.producer }}</div>
    <div>{{ cinema.score }}</div>
  </div>
</template>

<script>
import { helpCommon } from "@/mixins/common"

export default {
  name: "CinemaPreview",
  mixins: [helpCommon],
  props: {
    cinema: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="less">
.cinema-preview {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__name {
    margin-top: 20px;
  }

  &__author {
    margin-bottom: 20px;
  }

  &__name {
    font-size: 20px;
    font-weight: 600;
  }

  &__image {
    height: 350px;
    border-radius: 4px;
  }
}
</style>