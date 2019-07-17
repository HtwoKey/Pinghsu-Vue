<template>
  <div>
    <app-header/>
    <app-main></app-main>
    <app-footer/>
  </div>
</template>

<script>
import AppMain from './components/AppMain';


export default {
  name: 'Layout',
  components: {
    AppMain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
