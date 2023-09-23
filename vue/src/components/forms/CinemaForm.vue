<template>
  <div>
    <el-input class="input_margin" v-model="form.name" placeholder="Please input name" />
    <el-input class="input_margin" v-model="form.year" placeholder="Please input year" />
    <el-input class="input_margin" v-model="form.previewUrl" placeholder="Please input preview URL" />
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
  }
}
</script>

<style lang="less">
.input_margin {
  margin-top: 16px;
}
</style>