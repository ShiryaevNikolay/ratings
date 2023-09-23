<template>
  <div>
    <el-input class="input_theme" v-model="form.name" placeholder="Please input name" />
    <el-input class="input_theme" v-model="form.year" placeholder="Please input year" />
    <el-input class="input_theme" v-model="form.previewUrl" placeholder="Please input preview URL" />
    <el-button type="primary" v-on:click="showInputText">Primary</el-button>
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
        previewUrl: '',
      }
    }
  },
  methods: {
    showInputText: function() {
      let text = `
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
.input_theme {
  margin-top: 16px;
}
</style>