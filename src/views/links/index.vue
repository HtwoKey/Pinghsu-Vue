<template>
  <div>
    <article class="main-content page-page">
      <div class="post-header">
        <h1 class="post-title" itemprop="name headline"> Links </h1>
      </div>
      <div id="post-content" class="post-content">
        <h3>友情链接</h3>
        <ul class="flinks">
          <li v-for="(link,index) in linksList" :key="index">
            🔒 <a :href="link.url" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
        <h3>链接须知</h3>
        <blockquote>
          <ul>
            <li>
              <p>请确定贵站可以稳定运营</p>
            </li>
            <li>
              <p>原创博客优先，技术类博客优先，设计、视觉类博客优先</p>
            </li>
            <li>
              <p>经常过来访问和评论，眼熟的</p>
            </li>
          </ul>
        </blockquote>
        <p>备注：默认申请友情链接均为内页（当前页面）</p>
        <h3>基本信息</h3>
        <pre><code class="lang-md">网站名称：HTwoKey
网站地址：www.htwokey.com</code></pre>
        <p>暂时先这样，同时欢迎互换友链，这个页面留言即可。 ^_^</p>
        <p>还有，我会不定时对无法访问的网址进行清理，请保证自己的链接长期有效。</p>
      </div>
    </article>
    <!--<app-comments></app-comments>-->
    <app-comments :aid="id" :commlist="commList" @func="getList" />
  </div>
</template>

<script>
import { applyList, list } from '@/api/links'
export default {
  name: 'Links',
  data() {
    return {
      id: 0,
      entity: [],
      commList: [],
      linksList: []
    }
  },
  created() {
    this.getLinkList()
    this.getList()
  },
  methods: {

    // 获取已经通过审核的友链
    getLinkList() {
      list().then(response => {
        this.linksList = response.data
      })
    },

    // 获取所有的友链申请
    getList() {
      applyList().then(response => {
        if (response.data != null) {
          this.commList = response.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
