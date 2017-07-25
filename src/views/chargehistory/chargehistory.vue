<template>
  <div class="chargehistory">
    <ul class="group">
      <li v-for="(item,index) in chargeDesc">
        <router-link to="/chargehistory/historyDesc" tag="div">
          <div class="li-top">
            <span>2017-06-04</span>
            <span>09:30</span>
          </div>
          <div class="li-bottom">
            <span>充电设备：{{item.device}}
              <em>4号端口</em>
            </span>
            <span>
              <strong>1.6</strong>元</span>
          </div>
        </router-link>
      </li>
    </ul>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'chargeDesc'
    ])
  }
}
</script>
<style lang="less" scoped>
@import './chargehistory.less';
@import '../../common/less/variable.less';
</style>


