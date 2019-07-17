import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Layout from '@/views/layout/Layout'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  
  routes: [
    {
      path: '',
      component: Layout,
      meta:{
        title:'HTwoKey',
      },
      redirect: 'index',
      children: [
        { path: '/index',component: () => import('@/views/index'),meta:{title:'HTwoKey'}},
        { path: '/article/:id', component: () => import('@/views/info')},
        { path: '/category/:id', component: () => import('@/views/category'),meta:{title:'分类 - HTwoKey'}},
        { path: '/tag/:id', component: () => import('@/views/tag'),meta:{title:'标签 - HTwoKey'}},
        { path: '/timeLine', component: () => import('@/views/timeLine'),meta:{title:'时间线 - HTwoKey'}},
        { path: '/links', component: () => import('@/views/links'),meta:{title:'友链 - HTwoKey'}},
        { path: '/about', component: () => import('@/views/about'),meta:{title:'关于 - HTwoKey'}},
        { path: '/search',component:() => import('@/views/search'),meta:{title:'搜索 - HTwoKey'}},
      ]
    },
    { path: '/error', component:() => import('@/views/500'),meta:{title:'服务器错误'}},
    { path: '/notFound',component:() => import('@/views/404'),meta:{title:'找不到页面'}},
    { path: '*', component:() => import('../views/404') }
  ],
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }  
})
export default router;
//全局配置
router.beforeEach((to, from, next) => {
  // Change doc title
  document.title = to.meta.title;
  next()
})


