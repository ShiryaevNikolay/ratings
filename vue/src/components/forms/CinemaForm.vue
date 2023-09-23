<template>
  <div>
    <el-input v-model="form.name" placeholder="Please input name" />
    <el-input v-model="form.year" placeholder="Please input year" />
    <el-input v-model="form.previewUrl" placeholder="Please input preview URL" />
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