# Pinghsu-Vue

## 项目介绍
Pinghsu是一款以前端性能优化为出发点而制作的Typecho主题，而Pinghsu-Vue是基于这款主题的[vue](https://github.com/vuejs/vue)版本，基本实现了原主题的大部分功能，还添加了一些其它的功能。

- [Pinghsu](https://www.linpx.com)

- [Pinghsu - GitHub](https://github.com/chakhsu/pinghsu)


**目前版本为 `v1.0+` 基于 `vue-cli` 进行构建，若发现问题，欢迎提[issue]()。**

**该项目不支持低版本浏览器(如 ie)**


## 前序准备
你需要在本地安装 [Node.js](http://nodejs.org/)

### 本项目技术栈基于

技术 | 说明 | 官网
----|----|----
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)
vue-meta | 管理HMTL头部标签 |[https://github.com/nuxt/vue-meta](https://github.com/nuxt/vue-meta)
Axios | 前端HTTP框架 | [https://github.com/axios/axios](https://github.com/axios/axios)
nprogress | 进度条控件 | [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)
headroom | 隐藏或展现页面上的元素 |[https://www.bootcss.com/p/headroom.js/](https://www.bootcss.com/p/headroom.js/)
identicon | 哈希头像生成器 |[https://github.com/stewartlord/identicon.js](https://github.com/stewartlord/identicon.js)


## 开始使用

``` bash
# 安装依赖
npm install
# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org
# 启动服务
npm run serve
# 打包发布
npm run build
# 打包发布 + 静态资源分析
npm run build --report
```
## 项目目录结构
``` lua
|-- pinghsu-vue
    |-- build  构建脚本目录
    |-- config  项目配置
    |-- src  源码目录 
        |-- api  数据接口
        |-- assets  资源文件
        |-- components  公共组件
        |-- router  前端路由
        |-- style  css样式
        |-- utils  公共的方法工具类库
        |-- views  页面
        |-- App.vue  根组件
        |-- main.js  入口js文件 
    |-- static  静态资源文件（不会被打包）
        |-- icon  
        |-- img
        |-- lib  引用外部的js
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions


## License 许可证
Open sourced under the MIT license.

根据 MIT 许可证开源。
