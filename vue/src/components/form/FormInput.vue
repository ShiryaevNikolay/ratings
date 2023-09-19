<template>
    <el-input placeholder="Please input" v-model="input"></el-input>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                date: '',
                previewUrl: '',
            }
        }
    }
}
</script>