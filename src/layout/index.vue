<!-- <script setup>
</script>

<template>
  <div class="container">
    <el-button @click="$router.push('/map')">查看地图</el-button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;

  .el-button {
    margin: 10px auto;
  }
}
</style> -->

<script setup>
import AsideItem from './asider.vue'
</script>

<template>
  <div class="container">
    <div class="left">
      <!-- <el-button @click="$router.push('/map')">查看地图</el-button>
      <el-button @click="$router.back()">返回</el-button> -->
      <div class="log">LOGO</div>
      <AsideItem />
    </div>
    <div class="right">
      <div class="nav-header"></div>
      <!-- 二级路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;

  >.left {
    width: 200px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);

    .log {
      text-align: center;
      padding: 50px;
    }
  }

  >.right {
    flex: 1;

    .nav-header {
      height: 120px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    }
  }
}
</style>