<template>
  <footer id="footer" class="app-footer">
    <!-- 个人的其他站点 -->
    <div class="app-footer-social">
      <div class="app-footer-container clearfix">
        <div class="social-list">
          <a class="social weibo" target="blank" href="">WEIBO</a>
          <a class="social github" target="blank" href="https://github.com/HtwoKey">GITHUB</a>
        </div>
      </div>
    </div>

    <!-- 网站信息 -->
    <div class="app-footer-meta">
      <div class="app-footer-container">
        <div class="app-footer-info">
          <p>© {{ year }} HTwoKey <a href="http://www.beian.miit.gov.cn" target="_blank" rel="nofollow"> | 蜀ICP备18018751号-2</a> | Theme by
            <a href="https://github.com/chakhsu/pinghsu" target="_blank" rel="nofollow">pinghsu</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: ''
    }
  },
  created() {
    this.initYear()
  },
  methods: {
    initYear() {
      const date = new Date()
      this.year = date.getFullYear()
    }
  }
}
</script>
<style></style>

