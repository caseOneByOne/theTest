<template>
  <div class="banner">
    <h1>{{ msg }}</h1>
    <el-carousel height="630px" indicator-position="outside">
      <el-carousel-item v-for="item in banner" :key="item">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      msg: '欢迎来到彭程西式餐饮学校',
      banner: [
        require("../assets/component/bannerimg/banner1.png"),
        require("../assets/component/bannerimg/banner2.png"),
        require("../assets/component/bannerimg/banner3.png"),
        require("../assets/component/bannerimg/banner4.png"),
        require("../assets/component/bannerimg/banner5.png")
      ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
