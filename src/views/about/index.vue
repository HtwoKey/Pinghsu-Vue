<template>
  <article class="main-content page-page">
    <div class="post-header">
      <h1 class="post-title" itemprop="name headline"> 关于</h1>
      <div class="post-data">
        <time datetime="2018-06-28T14:07:00+08:00" itemprop="datePublished">本网站创建于2018-09-13 14:22:53</time>
      </div>
    </div>
    <div id="post-content" class="post-content">
      <h3>Hello,World</h3>
      <p>我是‘两把钥匙’（笔名），JavaWeb攻城狮。</p>
      <p>坐标：'104.053394,30.679201'</p>
      <p>技能：Java、JavaScript、Python、Vue、MySQL、SQL Server、</p>
      <p>爱好：慢跑、爬山、自行车、编程、摄影、文学、音乐</p>
      <h3>联系方式</h3>
      <ul>
        <li><p><a href="https://github.com/HtwoKey" target="_blank">GitHub</a></p></li>
        <li><p>Email:hchboby@outlook.com</p></li>
        <li><p>QQ:624322953</p></li>
      </ul>
      <h3>关于博客</h3>
      <p>前端技术：Vue.js,HTML5,scss</p>
      <p>后端技术：SpringBoot,MyBatis</p>
      <p>主题：<a href="https://github.com/chakhsu/pinghsu">Pinghsu</a>是一款以前端性能优化为出发点而制作的Typecho主题,本站使用的是自改的vue版,有兴趣的同学请看我的GitHub</p>
      <p>主机：阿里云</p>
      <p>代理：Nginx</p>
      <p>存储：阿里云OSS</p>
      <p>服务：tomcat</p>
      <p>数据库：MySQL</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    document.getElementsByTagName('body')[0].className = 'bg-white'
  }
}
</script>

