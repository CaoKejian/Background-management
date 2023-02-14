import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
import {createVNode,render} from 'vue'
import pinia from '../stores/store'
import  loadingBar  from '../components/loadingBar.vue'
import {useInfoStore} from '../stores/counter'
const useStore = useInfoStore(pinia);


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import ('../views/login/login.vue'),
      meta:{
        title:"登陆页面",
        transition:"animate__fadeIn"
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/home/home.vue'),
      redirect:'/index',
      children:[
        {
          path:'index',
          name:'index',
          component:()=> import ('../views/index/index.vue'),
        }
      ],
      meta:{
        title:"首页",
        transition:"animate__fadeIn"
      }
    },
    {
      path:"/info",
      name:'info',
      component:()=> import  ('../views/home/home.vue'),
      children:[
        {
          path:"infoCenter",
          name:'infoCenter',
          component:()=> import  ('../views/info/infoCenter.vue'),
        }
      ]
    }
  ]
})


const setTitle = (to:RouteLocationNormalized) => {
  if(to.meta.title == undefined){
    document.title ='还不知道叫什么后台'
  }else{
    document.title = to.meta.title
  }
}
type NewMenus = {
  [key:number]:MenuObj 
}
const Vnode = createVNode(loadingBar)
render(Vnode,document.body)
router.beforeEach((to, from, next) => {
  const menus:NewMenus = useStore.getNewLocalMenus
  for(let key in menus){
    const newRoute = {
      path:'/' + menus[key].name,
      name:menus[key].name,
      component:() => import ('../views/home/home.vue'),
      children:[]
    }
    for (let i = 0; i < menus[key].children.length; i++) {
      newRoute.children?.push({
        path:menus[key].children[i].name,
        name:menus[key].children[i].name,
        component:() => import(`../views/${menus[key].name}/${menus[key].children[i].name}.vue`)
      }) 
    }
    // 添加路由规则
    router.addRoute(newRoute)
  }
  Vnode.component?.exposed?.startLoading()
  setTitle(to)
  next()
});
router.afterEach((to,from)=>{
  Vnode.component?.exposed?.endLoading()
})
export default router
