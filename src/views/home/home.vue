<template>
  <div class="container" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">头部</div>
    <div class="menu">
      <el-menu active-text-color="#ffd04b" background-color="#ffffff" class="el-menu-vertical-demo" default-active="0"
        text-color="#000" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true">
        <el-sub-menu :index="menus.id + ''" v-for="menus, index in  newMenus" :key="menus.id">
          <template #title>
            <i :class='menus.icon' style="margin-right: 10px;"></i>
            <span>{{ menus.title }}</span>
          </template>
          <template v-for="submenu in   menus.children" :key="submenu.id">
            <el-menu-item :index="' /' + menus.name + '/' + submenu.name" v-if="!submenu.hidden">{{
              submenu.title
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { useInfoStore } from '@/stores/counter'
const useInfo = useInfoStore()

interface MenuObj {
  parentId: number
  id: number
  icon: string
  hidden?: 0 | 1
  title?: string
  children?: MenuObj[]
  name?: string
}
type NewMenus = {
  [key: number]: MenuObj
}

const newMenus: NewMenus = useInfo.getNewMenus
const handleOpen = (key: string, keyPath: string[]) => {
}
const handleClose = (key: string, keyPath: string[]) => {
}
</script>
<style lang='less' scoped>
.container {
  height: 100vh;
  position: relative;

  .header {
    height: 4.375rem;
    background-color: #001529;

  }

  .menu {
    position: absolute;
    width: 15.625rem;
    top: 4.375rem;
    left: 0;
    bottom: 0;
    background-color: rgb(47, 47, 129);

    :deep(svg) {
      font-size: 16px;
      font-weight: bold;
    }


  }

  .content {
    position: absolute;
    top: 4.375rem;
    right: 0;
    left: 15.625rem;
    bottom: 0;
    background-color: skyblue;
  }
}
</style>