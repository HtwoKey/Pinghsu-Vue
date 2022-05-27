import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
// import Home from '../views/Home.vue'

/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '',
    component: Layout,
    meta: {
      title: 'HTwoKey'
    },
    redirect: 'index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/index'),
        meta: { title: 'HTwoKey' }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/article')
      },
      {
        path: '/about',
        component: () => import('@/views/about'),
        meta: { title: '关于 - HTwoKey' }
      }, {
        path: '/timeline',
        component: () => import('@/views/timeline'),
        meta: { title: '时间线 - HTwoKey' }
      },
      {
        path: '/category/:id',
        component: () => import('@/views/category'),
        meta: { title: '文章分类 - HTwoKey' }
      },
      {
        path: '/tag/:id',
        component: () => import('@/views/tag'),
        meta: { title: '文章标签 - HTwoKey' }
      },
      {
        path: '/links',
        component: () => import('@/views/links'),
        meta: { title: '友链 - HTwoKey' }
      },
      {
        path: '/search',
        component: () => import('@/views/search'),
        meta: { title: '文章搜索 - HTwoKey' }
      }]
  },
  { path: '/error', component: () => import('@/views/error/500'), meta: { title: '服务器错误' }},
  { path: '/404', component: () => import('../views/error/404'), meta: { title: '找不到页面' }},
  { path: '*', component: () => import('../views/error/404'), meta: { title: '找不到页面' }}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  // Change doc title
  document.title = to.meta.title
  next()
})
