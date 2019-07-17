// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
import axios from 'axios';
import NProgress from 'nprogress'; //进度条
import 'nprogress/nprogress.css';

import header from './components/Header';
import footer from './components/footer';
import comments from './components/Comments';
import loading from './components/Loading';
import page from './components/Paging';
import router from './router/index';
import './style/style.min.css';


Vue.config.productionTip = false
Vue.prototype.$axios = axios

//配置进度条
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to,from,next) => {
  NProgress.start();
  next()
});

router.afterEach(() => {
  NProgress.done()
});

Vue.component('app-header',header)
Vue.component("app-footer",footer)
Vue.component('app-page',page)
Vue.component('app-loading',loading)
Vue.component('app-comments',comments)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
