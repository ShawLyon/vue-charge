<template>
  <div>
    <scroller :on-refresh="refresh" :on-infinite="infinite" height="100%">
      <ul class="listMain">
        <li class="main-item" v-for="(item,index) in chargeDesc" v-show="item.car==1">
          <div class="item-hd" @click="jumpDetail(index)">
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
            </div>
            <div class="foot-r">
              <x-button mini class="navBtn" plain>导航</x-button>
            </div>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { XButton } from 'vux'
import router from 'router'
export default {
  components: {
    XButton,
  },
  computed: {
    ...mapState([
      'chargeDesc'
    ])
  },
  methods: {
    ...mapMutations([

    ]),
    jumpDetail(index) {
      let activeCharge = this.chargeDesc[index];
      this.$router.push({
        name: 'chargeDetail', params: {
          id: activeCharge.id,
          name: activeCharge.name,
          device: activeCharge.device,
          address: activeCharge.address,
          type: activeCharge.type,
          promotion: activeCharge.promotion,
        }
      });
    },

  }
}
</script>
<style lang="less" scoped>
@import '../../common/less/variable.less';
@import './listEleCar.less';
</style>
