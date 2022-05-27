<template>
  <div>
    <Header />
    <app-main />
    <Footer />
  </div>
</template>

<script>
import { AppMain, Header, Footer } from './components'
export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    AppMain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
