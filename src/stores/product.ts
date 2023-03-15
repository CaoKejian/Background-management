import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    row:<listRole>{},
    visible:<boolean>false
  }),
  getters: {

  },
  actions: {
   
  }

})
