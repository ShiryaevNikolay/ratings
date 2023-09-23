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
      <el-button type="primary" @click="() => showInputText()">Напечатать в консоль</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
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
    showInputText () {
      const text = `
      Название фильма: ${this.form.name}
      Год: ${this.form.year}
      Ссылка: ${this.form.previewUrl}
      `
      console.log(text)
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