<template>
  <header id="header" class="header bg-white">
    <div class="navbar-container">
      <a href="/" class="navbar-logo">
        <img src="@/assets/icon/1019.png" alt="HTwoKey">
        <span class="logo-text-left">HTwoKey</span>
      </a>
      <div class="navbar-menu">
        <a href="/timeLine">时间线</a>
        <a href="/links">友链</a>
        <a href="/about">关于</a>
      </div>
      <a href="/search" class="navbar-search">
        <span class="icon-search" />
      </a>
      <div class="navbar-mobile-menu" onclick=""> <span class="icon-menu cross"><span class="middle" /></span>
        <ul>
          <li><a href="/timeLine">时间线</a></li>
          <li><a href="/links">友链</a></li>
          <li><a href="/about">关于</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import H from '@/utils/headroom.min.js'
export default {
  name: 'Header',
  data() {
    return {
    }
  },
  mounted() {
    var header = new H(document.getElementById('header'), {
      tolerance: 0,
      offset: 70,
      classes: {
        initial: 'animated',
        pinned: 'slideDown',
        unpinned: 'slideUp'
      }
    })
    header.init()
  }
}
</script>

<style scoped>

</style>
