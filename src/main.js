import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/style.min.css'

import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'

import loading from './components/Loading'
import page from './components/Page'
import comments from './components/Comments'

Vue.component('app-page', page)
Vue.component('app-loading', loading)
Vue.component('app-comments', comments)

Vue.config.productionTip = false

// 配置进度条
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
