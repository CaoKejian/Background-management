import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface MenuObj {
  parentId:number
  id:number
  children?:MenuObj[]
  name:string
}
type NewMenus = {
  [key:number]:MenuObj
}
export const useInfoStore = defineStore('info', {
  state:()=>{
    return{
      menu:[
        <MenuObj>{}
      ]
    }
  },
  getters:{
    getNewMenus(state){
      const newMenus:NEwMenus = {}
      const menu = state.menu
      for (let i = 0; i < menu.length; i++) {
        if(menu[i].parentId === 0){
          // 一级菜单
          newMenus[menu[i].id] = {...menu[i],children:newMenus[menu[i].id]?.children || []} 
        }else{
          let parentId =  menu[i].parentId
          newMenus[parentId] = newMenus[parentId] || {}
          newMenus[parentId].children = newMenus[parentId].children || []
          newMenus[parentId].children?.push(menu[i])
        }
      }
      return newMenus
    }
  },
  actions:{

  }

})
