<template>
  <div>
    <scroller :on-refresh="refresh" :on-infinite="infinite" height="100%">
      <ul class="listMain">
        <li class="main-item" v-for="(item,index) in chargeDesc" v-show="item.car=='0'">
          <div class="item-hd" @click="jumpDetail(index,$event)">
            <div class="item-hd-main">
              <div class="head-l">
                <p>{{item.name}}</p>
                <p>{{item.able}}个充电插座可用</p>
              </div>
              <div class="head-r">
                <span>{{item.distance}}</span>
              </div>
            </div>
          </div>
          <div class="item-ft">
            <div class="foot-l">
              <p>￥{{item.price}}元/小时</p>
              <p>{{item.promotion}}</p>
            </div>
            <div class="foot-r">
              <x-button mini class="navBtn">导航</x-button>
            </div>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { XButton } from 'vux'

export default {
  components: {
    XButton,
  },
  computed: {
    ...mapState([
      'chargeDesc',
      'fold'
    ])
  },
  methods: {
    jumpDetail(index) {
      this.$store.commit('activeIndex', index); //把当前index存储到state，用于获取相应详情页
      this.$router.push('/chargeDtail');
    },

  }
}
</script>
<style lang="less" scoped>
@import '../../common/less/variable.less';
@import './listSteamCar.less';
</style>
