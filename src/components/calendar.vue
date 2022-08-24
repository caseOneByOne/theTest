<template>
    <div class="calendar">
        <el-calendar v-model="value">
        </el-calendar>
    </div>
</template>
<script>
export default {
    name: "calendar",
    data() {
        return {
            value: new Date()
        }
    }
}
</script>
<style scoped>
.calendar{
    
}
</style>