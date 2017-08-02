<template>
  <div class="news">
    <ul>
      <router-link to="/myself/news/newsDesc" class="item" tag="li">
        <div class="item-top">
          <div class="item-top-l">
            <div class="item-point"> </div>
            <h4>系统消息</h4>
          </div>
          <span class="item-top-r">今天 11：21</span>
        </div>
        <p class="item-content">平台系统将于今天晚上10:00进行硬件升级。</p>
      </router-link>
    </ul>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import './news.less';
@import '../../common/less/variable.less';
</style>
