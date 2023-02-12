import { createRouter, createWebHistory } from 'vue-router'
import {createVNode,render} from 'vue'
import  loadingBar  from '../components/loadingBar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/login/login.vue'),
      meta:{
        title:"登陆页面",
        transition:"animate__fadeIn"
      }
    },
  ]
})


const setTitle = (to:RouteLocationNormalized) => {
  if(to.meta.title == undefined){
    document.title ='还不知道叫什么后台'
  }else{
    document.title = to.meta.title
  }
}
const Vnode = createVNode(loadingBar)
render(Vnode,document.body)
router.beforeEach((to, from, next) => {
  Vnode.component?.exposed?.startLoading()
  setTitle(to)
  next()
});
router.afterEach((to,from)=>{
  Vnode.component?.exposed?.endLoading()
})
export default router
