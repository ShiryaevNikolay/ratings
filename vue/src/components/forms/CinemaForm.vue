<template>
  <div class="cinema-form">
    <div class="cinema-form__field">
      <el-input v-model="form.name" placeholder="Название фильма" />
    </div>
    <div class="cinema-form__field">
      <el-input v-model="form.originName" placeholder="Оригинальное название" />
    </div>
    <div class="cinema-form__field">
      <el-input v-model="form.producer" placeholder="Режиссер" />
    </div>
    <div class="cinema-form__field">
      <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd" placeholder="Дата выхода фильма" />
    </div>
    <div class="cinema-form__field">
      <el-input v-model="form.previewUrl" placeholder="Ссылка на обложку" />
    </div>
    <div class="cinema-form__field">
      <span>Оценка фильма</span>
      <el-rate v-model="form.score" :colors="getSroceIcons" class="cinema-form__field" />
    </div>
    <div class="cinema-form__field">
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
        name: this.cinema ? this.cinema.name : '',
        originName: this.cinema ? this.cinema.originName : '',
        producer: this.cinema ? this.cinema.producer : '',
        date: this.cinema ? this.cinema.date : '',
        previewUrl: this.cinema ? this.cinema.previewUrl : '',
        score: this.cinema ? this.cinema.score : null
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
      this.form.id = this.cinema.id
      this.editCinema(this.form)
    },
    addFilm() {
      this.saveCinema(this.form)
    }
  },
  computed: {
    getButtonText () {
      return this.cinema ? "Редактировать" : "Добавить"
    },
    getSroceIcons () {
      return ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    }
  }
}
</script>

<style lang="less">
.cinema-form {
  &__field {
    margin-top: 16px;
  }
}
</style>