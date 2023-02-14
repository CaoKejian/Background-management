import { createApp,toRaw } from 'vue'
import { createPinia,type PiniaPluginContext } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
const store = createPinia()
import './assets/css/reset.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/fonts/iconfont.css'
import svgIcon from './icons/index.vue'

type Options = {
  key : string
}
const __piniaKey__:string = 'pinia1'
const setStorage = (key:string,value:any) => {
  localStorage.setItem(key,JSON.stringify(value))
}
const getStorage = (key:string) => {
  return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key) as string) :{}
}
const piniaPlugin = (options:Options) => {
  return (context:PiniaPluginContext) => {
    const {store} = context
    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
    store.$subscribe(()=>{
      setStorage(`${options?.key ??  __piniaKey__}-${store.$id}`,toRaw(store.$state))
    }) 
    return {
      ...data
    }
  }
}
store.use(piniaPlugin({
  key:"pinia"
}))


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.component('svg-icon', svgIcon)
