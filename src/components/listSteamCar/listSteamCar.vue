<template>
  <div class="listSteamCar">
    <scroller :on-refresh="refresh" :on-infinite="infinite" >
      <ul class="listMain">
        <li class="main-item" v-for="(item,index) in chargeDesc" v-show="item.car=='0'">
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
    XButton
  },
  computed: {
    ...mapState([
      'chargeDesc',
      'fold'
    ])
  },
  methods: {
    // jumpDetail(index) {
    //   this.$router.push({ path: 'chargeDetail', query: { id: this.chargeDesc[index].id }});
    // },
    ...mapMutations([
      'SET_TITLE_TEXT'
    ]),
    jumpDetail(index) {
      this.SET_TITLE_TEXT('详情');
      let activeCharge = this.chargeDesc[index];
      this.$router.push({
        name: 'chargeDetail', params: {
          titleType: '详情',
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
@import '~vux/src/styles/1px.less';
@import '../../common/less/variable.less';
@import './listSteamCar.less';
</style>
