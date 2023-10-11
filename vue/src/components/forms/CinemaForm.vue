<template>
  <div class="cinema-form">
    <div class="cinema-form__control">
      <el-input v-model="form.name" placeholder="Название фильма" />
    </div>
    <div class="cinema-form__control">
      <el-input v-model="form.originName" placeholder="Оригинальное название" />
    </div>
    <div class="cinema-form__control">
      <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="Дата выхода фильма" />
    </div>
    <div class="cinema-form__control">
      <el-input v-model="form.previewUrl" placeholder="Ссылка на обложку" />
    </div>
    <div class="cinema-form__control">
      <el-button type="primary" @click="() => handleClick()">{{ getButtonText }}</el-button>
    </div>
  </div>
</template>

<script>
import { helpCinema } from "@/mixins/cinema";

export default {
  name: 'FormInput',
  mixins: [helpCinema],
  props: {
    cinema: Object,
    default: () => (null)
  },
  data() {
    return {
      form: {
        name: '',
        originName: '',
        date: '',
        previewUrl: ''
      }
    }
  },
  methods: {
    handleClick() {
      if (this.cinema) {
        this.editFilm()
      } else {
        this.addFilm()
      }
    },
    editFilm() {
      const cinemaWithId = this.form['id'] = this.cinema.id
      this.editCinema(cinemaWithId)
    },
    addFilm() {
      this.saveCinema(this.form)
    }
  },
  computed: {
    getButtonText() {
      return this.cinema ? "Редактировать" : "Добавить"
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