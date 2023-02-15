<template>
  <div class="container" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">
      <div class="svg">
        <svg-icon name="logo" class="logo-svg" />
        <span>Background management system</span>
      </div>
    </div>
    <div class="menu" id="menu">
      <el-menu active-text-color="#409eff" background-color="#ffffff" class="el-menu-vertical-demo" default-active="0"
        text-color="#000" @open="handleOpen" @close="handleClose" :unique-opened="false" :router="true">
        <el-sub-menu :index="menus.id + ''" v-for="menus, index in  newMenus" :key="menus.id">
          <template #title>
            <i :class='menus.icon' style="margin-right: 10px;" id="menu-icon"></i>
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
            <Menu @click="clickMenu" class="icon" style="width: 1.2em; height: 1.2em; margin-right: 0" />
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
const clickMenu = () => {

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

    .svg {
      height: 3rem;
      padding-left: 1.25em;
      display: flex;
      align-items: center;

      .logo-svg {
        font-size: 30px;
      }

      span {
        height: 3rem;
        color: #ffffff;
        margin-left: 1.25em;
      }
    }
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
      width: 100%;
      position: absolute;
      bottom: 0;

      ul {
        width: 100%;
        height: 2.5rem;
        border-top: 1px solid #efefef;

        .icon {
          cursor: pointer;
          margin: .625rem 0 0 1rem;

          &:hover {
            color: #2696ff;
            transition: all .3s;
          }
        }
      }
    }

  }

  .content {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 3rem;
    left: 13rem;
    background-color: skyblue;
  }
}
</style>