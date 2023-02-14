<template>
  <div class="container" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">头部</div>
    <div class="menu">
      <el-menu active-text-color="#409eff" background-color="#ffffff" class="el-menu-vertical-demo" default-active="0"
        text-color="#000" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true">
        <el-sub-menu :index="menus.id + ''" v-for="menus, index in  newMenus" :key="menus.id">
          <template #title>
            <i :class='menus.icon' style="margin-right: 10px;"></i>
            <span>{{ menus.title }}</span>
          </template>
          <template v-for="submenu in   menus.children" :key="submenu.id">
            <el-menu-item :index="'/' + menus.name + '/' + submenu.name">{{
              submenu.title
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
      <div class="menu-bottom">
        <ul>
          <li>
            <Menu style="color:#262626;width: 1.2em; height: 1.2em; margin-right: 0" />
          </li>
        </ul>
      </div>
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
  icon?: string
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
    height: 3rem;
    line-height: 3rem;
    background-color: #001529;

  }

  .menu {
    position: absolute;
    width: 13rem;
    top: 3rem;
    left: 0;
    bottom: 0;
    background-color: #fff;

    :deep(svg) {
      font-size: 18px;
    }

    &-bottom {
      width: 13rem;
      position: absolute;
      bottom: 0;
      left: 0;

      ul {
        width: 100%;
        height: 2.5rem;
        border-top: 1px solid #efefef;
        padding: .625rem 0 0 1rem;
      }
    }

  }

  .content {
    position: absolute;
    top: 3rem;
    right: 0;
    left: 13rem;
    bottom: 0;
    background-color: skyblue;
  }
}
</style>