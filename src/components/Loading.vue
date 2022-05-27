<!-- 加载动画组件 -->
<template>
  <div class="index">
    <div class="loader-ring">
      <div class="loader-ring-light" />
      <div class="loader-ring-track" />
      <p class="loader-text">
        Loading...
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang="scss">
.index{
  width: 100%;
  height: 700px;
}
.loader-text{
  font-size: 20px;
  height: 20px;
  text-align: center;
  color: red
}
.relative {
  position: relative;
}

.loader-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -120px 0 0 -120px;
  width: 240px;
  height: 260px;
}

.loader-ring-light {
  width: 240px;
  height: 240px;
  -moz-border-radius: 240px;
  -webkit-border-radius: 240px;
  border-radius: 240px;
  -moz-box-shadow: 0 4px 0 red inset;
  -webkit-box-shadow: 0 4px 0 red inset;
  box-shadow: 0 4px 0 red inset;
  animation: rotate-360 2s linear infinite;
}

.loader-ring-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 240px;
  -moz-border-radius: 240px;
  -webkit-border-radius: 240px;
  border-radius: 240px;
  -moz-box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0) inset;
  -webkit-box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0) inset;
  box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0) inset;
}

@keyframes rotate-360 {
  from {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
