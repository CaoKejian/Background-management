import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getChinaApi } from '@/request/api'

export const useChinaStore = defineStore({
  id: 'china',
  state: () => ({
    list: <RootObject>{}
  }),
  getters: {

  },
  actions: {
    async getList() {
      const result = await getChinaApi()
      this.list = result
    }
  }

})
