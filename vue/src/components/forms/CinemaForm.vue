<template>
  <div class="cinema-form">
    <div class="cinema-form__control">
      <el-input v-model="form.name" placeholder="Please input name" />
    </div>
    <div class="cinema-form__control">
      <el-input v-model="form.year" placeholder="Please input year" />
    </div>
    <div class="cinema-form__control">
      <el-input v-model="form.previewUrl" placeholder="Please input preview URL" />
    </div>
    <div class="cinema-form__control">
      <el-button type="primary" @click="() => addFilm()">Добавить фильм</el-button>
    </div>
  </div>
</template>

<script>
import { helpCinema } from "@/mixins/cinema";

export default {
  name: 'FormInput',
  mixins: [helpCinema],
  data() {
    return {
      form: {
        name: '',
        year: '',
        previewUrl: ''
      }
    }
  },
  methods: {
    addFilm () {
      this.saveCinema(this.form)
    }
  }
}
</script>

<style lang="less">
.cinema-form {
  &__control {
    margin-top: 16px;
  }
}
</style>