<template>
  <div id="app">
    <transition>
      <!-- <keep-alive> -->
        <router-view v-wechat-title="$route.meta.title" class="set-height"></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
html,body,#app{
  height: 100%;
}
.set-height {
  min-height: 100vh;
}
</style>
