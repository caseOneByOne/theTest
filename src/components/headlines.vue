<template>
    <div class="infinite-list-wrapper">
        <div class="lists_" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <div v-for="i in count" class="list-item">{{ i }}</div>
        </div>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
    </div>
</template>
<script>
export default {
    name: "headlines",
    data() {
        return {
            count: 10,
            loading: false
        }
    },
    computed: {
        noMore() {
            return this.count >= 20
        },
        disabled() {
            return this.loading || this.noMore
        }
    },
    methods: {
        load() {
            this.loading = true
            setTimeout(() => {
                this.count += 2
                this.loading = false
            }, 2000)
        }
    }
}

</script>
<style scoped>
.infinite-list-wrapper{
    overflow: auto;
    margin-left: 192px;
}
.lists_ {
    /* border: 1px solid red; */
}
.list-item{
    width: 80%;
    height: 50px;
    background-color: #409EFF;
    border-left: 1px sold #ffffff;
}
</style>