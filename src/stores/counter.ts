import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface MenuObj {
  parentId:number
  id:number
  children?:MenuObj[]
  name:string
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

  },
  actions:{

  }

})
