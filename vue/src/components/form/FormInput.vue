<template>
    <div>
        <el-input placeholder="Please input name" v-model="form.name"></el-input>
        <el-input placeholder="Please input year" v-model="form.year"></el-input>
        <el-input placeholder="Please input preview URL" v-model="form.previewUrl"></el-input>
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