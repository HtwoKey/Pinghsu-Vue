<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
import particles from 'particles.js'
export default {
  name: 'AppMain',
  computed: {
  },
}
</script>
<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>
