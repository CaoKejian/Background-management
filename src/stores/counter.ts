import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { adminInfoApi } from '../request/api'

interface MenuObj {
  parentId: number
  id: number
  children?: MenuObj[]
  name: string
}
type NewMenus = {
  [key: number]: MenuObj
}
export const useInfoStore = defineStore('info', {
  state: () => {
    return {
      menu: [
        <MenuObj>{}
      ]
    }
  },
  getters: {
    getNewMenus(state) {
      const newMenus: NewMenus = {}
      const menu = state.menu
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].parentId === 0) {
          // 一级菜单
          newMenus[menu[i].id] = { ...menu[i], children: newMenus[menu[i].id]?.children || [] }
        } else {
          let parentId = menu[i].parentId
          newMenus[parentId] = newMenus[parentId] || {}
          newMenus[parentId].children = newMenus[parentId].children || []
          newMenus[parentId].children?.push(menu[i])
        }
      }
      return newMenus
    },
    getNewLocalMenus(state) {
      const newMenus: any = {}
      const menus = JSON.parse(localStorage.getItem('pinia-info') as string).menu
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].parentId === 0) {
          // 一级菜单
          newMenus[menus[i].id] = { ...menus[i], children: newMenus[menus[i].id]?.children || [] }
        } else {
          // 二级菜单
          let parentId = menus[i].parentId
          newMenus[parentId] = newMenus[parentId] || {}
          newMenus[parentId].children = newMenus[parentId].children || []
          newMenus[parentId].children?.push(menus[i])
        }
      }
      return newMenus
    }
  },
  actions: {
    getAdminInfo() {
      return new Promise((resolve, reject) => {
        adminInfoApi().then(res => {
          if (res.code === 200) {
            this.menu = res.data[0].menu
            resolve(res.data)
          } else {
            reject(res)
          }
        })
      })
    }
  }

})
