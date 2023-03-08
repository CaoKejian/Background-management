import { createRouter, useRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import { createVNode, render } from 'vue'
import pinia from '../stores/store'
import loadingBar from '../components/loadingBar.vue'
import { useInfoStore } from '../stores/counter'
const useStore = useInfoStore(pinia);
import { adminInfoApi } from '../request/api'
import { ElMessage } from 'element-plus'
const mRouter = useRouter()

declare module 'vue-router' {
  interface RouteMeta {
    title: string,
    transition: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue'),
      meta: {
        title: "登陆页面",
        transition: "animate__fadeIn"
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/home.vue'),
      redirect: '/business/businessAnalysis',
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../views/index/index.vue'),
        }
      ],
      meta: {
        title: "首页",
        transition: "animate__fadeIn"
      }
    },

  ]
})

interface MenuObj {
  parentId: number
  id: number
  children: MenuObj[]
  name: string
}
type NewMenus = {
  [key: number]: MenuObj
}

const setTitle = (to: RouteLocationNormalized) => {
  if (to.meta.title == undefined) {
    document.title = '还不知道叫什么后台'
  } else {
    document.title = to.meta.title
  }
}

const setNewArr = () => {
  const newMenus: NewMenus = useStore.getNewLocalMenus
  for (let key in newMenus) {
    const newRoute = {
      path: '/' + newMenus[key].name,
      name: newMenus[key].name,
      component: () => import('../views/home/home.vue'),
      redirect: '/' + newMenus[key].name + '/' + newMenus[key].children[0].name,
      children: [] as any[]
    }
    for (let i = 0; i < newMenus[key].children.length; i++) {
      newRoute.children.push({
        path: newMenus[key].children[i].name,
        name: newMenus[key].children[i].name,
        component: () => import(`../views/${newMenus[key].name}/${newMenus[key].children[i].name}.vue`),
        meta: {
          title: "Colin后台页面",
          transition: "animate__fadeIn"
        }
      })
    }
    router.addRoute(newRoute)
  }
}
const Vnode = createVNode(loadingBar)
render(Vnode, document.body)
router.beforeEach((to, from, next) => {
  const data = localStorage.getItem('pinia-info')
  if (data !== null && useStore.menu.length === 1) {
    adminInfoApi().then(res => {
      useStore.getAdminInfo().then(() => {
        setNewArr()
        next(to)
      })
    })
  } else if (data !== null && useStore.menu.length !== 1 && from.path === '/login' && to.path === '/index') {
    setNewArr()
    next()
  } else if (data == null) {
    adminInfoApi().then(res => {
      useStore.getAdminInfo().then(() => {
        setNewArr()
        next('/login')
        ElMessage({
          message: '登录已失效',
          type: 'error',
        })
      })
    })
  } else {
    next()
  }

  Vnode.component?.exposed?.startLoading()
  setTitle(to)
});
router.afterEach((to, from) => {
  Vnode.component?.exposed?.endLoading()
})
export default router
