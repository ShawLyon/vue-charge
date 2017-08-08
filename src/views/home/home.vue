<template>
  <div class="home">
    <x-header :left-options="{showBack: false}" class="hd-two">
      <tab :line-width="6" custom-bar-width="60px" active-color="#4477ac">
        <tab-item selected>电动车</tab-item>
        <tab-item>汽车</tab-item>
      </tab>
      <a slot="left" class="userIcon" @click="goUserCentent">
        <i class="fa fa-user-circle-o" slot="overwrite-left"></i>
        <badge class="userBadge"></badge>
      </a>
      <a slot="right" @click="listShow = !listShow" class="meun">
        <i class="fa fa-list-ul" slot="overwrite-left"></i>
        <span class="meun-text">找桩</span>
      </a>
    </x-header>
    <section class="floatingLayer">
      <x-button mini class="btn btn-1" @click.native="goAddmoney">充值</x-button>
      <x-button mini class="btn btn-2"  @click.native="goQRcode">扫码充电</x-button>
    </section>
    <!-- 地图 start -->
    <charge-map style="width: 100%; height: 100%"></charge-map>
    <!-- 地图 end -->
  
    <transition name="chargelist">
      <list-car v-if="listShow" :foo.sync="listShow"></list-car>
    </transition>
    <!--蒙板  -->
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="listShow = !listShow"></div>
    </transition>
  </div>
</template>

<script>
import ChargeMap from 'components/ChargeMap/ChargeMap'
import router from 'router'
import ListCar from 'components/listCar/listCar'
import { XHeader, XButton, Tab, TabItem, Badge } from 'vux'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    ListCar,
    XHeader,
    XButton,
    Tab,
    TabItem,
    Badge,
    ChargeMap
  },
  data() {
    return {
      listShow: false
    }
  },

  computed: {
    ...mapState([
      // 'chargeDesc',
      // 'fold'
    ])
  },
  methods: {
    ...mapMutations([
      // 'TOOGLE_FOLD'
    ]),
    goUserCentent() {
      this.$router.push('/login');
    },
    goAddmoney() {
      router.push('/addMoney');
    },
    goQRcode() {
      router.push('/QRcode');
    }
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import './home.less';
@import '~common/less/variable.less';
</style>
<style lang="less">
.home {
  /* header icon style */
  .vux-header .vux-header-left,
  .vux-header .vux-header-right {
    top: 9px;
  }
}
</style>



