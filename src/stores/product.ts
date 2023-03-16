import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getProductList } from '@/request/api'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    row:<listRole>{},
    visible:<boolean>false,
    searchData:<listRole>[],
    allList:[]
  }),
  getters: {
 
  },
  actions: {
    getProduct(){
      return new Promise ((resolve,reject)=>{
        getProductList().then(res=>{
          this.allList = res.data
          resolve(res.data)
        })
      })
    }
  }

})
