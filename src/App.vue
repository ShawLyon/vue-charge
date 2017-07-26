<template>
  <div id="app">
    <!-- <router-view v-wechat-title="$route.meta.title"></router-view> -->
    <transition >
      <router-view  v-wechat-title="$route.meta.title" class="set-height"></router-view>
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

body {
  background-color: #fbf9fe;
}
.set-height {
  min-height:100vh
}
</style>
