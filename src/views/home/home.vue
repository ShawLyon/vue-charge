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
  
    <!-- 地图  -->
    <div class="amap-page-container">
      <el-amap :vid="'amap-vue'" :center="center" :plugin="plugin"></el-amap>
  
    </div>
  
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
import { AMapManager } from 'vue-amap'
import router from 'router'
import ListCar from 'components/listCar/listCar'
import { XHeader, Tab, TabItem, Badge } from 'vux'
import { mapState, mapMutations } from 'vuex'

const list = () => ['电动车', '汽车']
export default {
  components: {
    ListCar,
    XHeader,
    Tab,
    TabItem,
    Badge
  },
  data() {
    return {
      listShow: false,
      center: [121.59996, 31.197646],
      plugin: ['ToolBar', 'PlaceSearch', 'Scale', 'Geolocation']
    }
  },
  computed: {
    ...mapState([
      'chargeDesc',
      'fold'
    ])
  },
  methods: {
    ...mapMutations([
      'TOOGLE_FOLD'
    ]),
    goUserCentent() {
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
@import './home.less';
@import '~common/less/variable.less';
</style>



