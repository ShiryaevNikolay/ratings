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
      <el-button type="primary" @click="() => handleClick()">{{ btnText }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    btnText: String,
    cinema: {
      type: Object,
      default: () => (null)
    }
  },
  data() {
    return {
      form: {
        name: '',
        originName: '',
        producer: '',
        date: '',
        previewUrl: '',
        score: null
      }
    }
  },
  mounted: function () {
    if (this.cinema) {
      this.form = {
        ...this.form,
        ...this.cinema
      }
    }
  },
  computed: {
    getSroceIcons () {
      return ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  methods: {
    handleClick () {
      this.$emit('btnClick', this.form)
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