<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>首页</span>
      </template>
      <el-menu-item-group>  
        <el-menu-item index="1-1" @click="$router.push('/map')">地图</el-menu-item>
        <el-menu-item index="1-2">地图demo</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>组件</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <document />
      </el-icon>
      <template #title>CSS相关</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>