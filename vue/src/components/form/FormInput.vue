<template>
    <div>
        <el-input placeholder="Please input" v-model="input"></el-input>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    data() {
        return {
            input: ''
        }
    }
}
</script>