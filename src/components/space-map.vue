<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { ref } from 'vue'

let checked1 = ref(false)
let checked2 = ref(false)
let checked3 = ref(false)

// 地图初始化
function initMap() {
  AMapLoader.load({
    key: "a5321ed6661e47aed36b8f5d8a8c4e86",  // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  }).then((AMap) => {
    console.log('amap对象', AMap);
    // JS api加载完成后获取amap对象
    const map = new AMap.Map('container', {
      viewMode: '2D', // 使用2d模式
      zoom: 11,  // 初始化地图层级
      center: [116.397428, 39.90923]  // 地图中心
    })
    // map.setMapStyle('amap://styles/whitesmoke')

    // 添加插件
    let toolbar;
    AMap.plugin(['AMap.ToolBar','AMap.Scale'], function () { // 异步加载插件
      toolbar = new AMap.ToolBar(); // 缩放工具条实例化
      map.addControl(toolbar);
    });
  })
}
initMap()
</script>

<template>
  <div class="main-box">
    <div id="container"></div>
    <div class="aside">
      <el-checkbox label="比例尺" v-model="checked1" />
      <el-checkbox label="工具条" v-model="checked2" />
      <el-checkbox label="工具条方向盘" v-model="checked3" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-box {
  position: relative;

  #container {
    margin-top: 50px;
    margin-left: 300px;
    width: 700px;
    height: 500px;
    border-radius: 50px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .3);
  }

  .aside {
    position: absolute;
    top: 50px;
    left: 120px;
    padding: 20px 10px;
    width: 120px;
    border-radius: 5px;
    box-shadow: 3px 2px 5px rgba(0, 0, 0, .2);
    background-color: #fff;

  }
}
</style>