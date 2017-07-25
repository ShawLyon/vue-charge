<template>
  <div class="mycharge">
    <section class="group" v-for="(item,index) in chargeDesc">
      <h3>正在充电</h3>
      <section class="charging">
        <div class="charging-l">
          <span class="chargetime-num">{{chargetimeNum}}</span>
          <span class="chargetime-txt">剩余充电时间</span>
        </div>
        <div class="charging-r">
          <span>电流: {{chargeCurrent}}A</span>
          <span>电压: {{chargeVoltage}}V</span>
        </div>
      </section>
      <section class="charging-desc">
        <div class="charged-item">
          <span>已充电时长: {{chargeDuration}}</span>
          <span>已充电电量:{{chargeAmount}}% <b style="color: #666;">(0.5KM)</b> </span>
        </div>
        <div>
          <span>充电设备:{{item.device}} <em>{{devicePort}}号端口</em></span>
        </div>
        <div>
          <span>充电位置:{{address}}</span>
        </div>
        <button class="stopCharge">停止充电</button>
        <button class="addCharge">增加充电时间</button>
      </section>
    </section>
    <router-link to="/chargehistory" class="charge-history" tag="div">历史充电记录</router-link>
  </div>
</template>
<script>
import { Group,XButton } from 'vux'
import { mapState} from 'vuex'
export default {
  data() {
    return {
      chargetimeNum: '20:20',  // 剩余充电时间
      chargeCurrent: '2.2',  // 电流
      chargeVoltage: '88',  // 电压
      chargeDuration: '20',  // 已充电时间
      chargeAmount: '20',  // 已充电量
      chargeDevice: '222222', // 充电设备编号
      devicePort: '4', // 充电设备端口
      address: '深圳宝安黄麻布村89号'

    }
  },
  components: {
    Group,
    XButton
  },
  computed: {
    ...mapState([
      'chargeDesc'
    ])
  }
}
</script>
<style lang="less">
@import './mycharge.less';
@import '../../common/less/variable.less';
</style>

