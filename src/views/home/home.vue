<template>
  <div class="home">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页</x-header>
    <x-header :left-options="{showBack: false}" class="hd-two">
      <tab :line-width="3" custom-bar-width="20px" active-color="#4478ac">
        <tab-item selected>电动车</tab-item>
        <tab-item>汽车</tab-item>
      </tab>
      <a slot="left"><i class="fa fa-user-circle-o" slot="overwrite-left"></i></a>
      <a slot="right" @click="toogleList"><i class="fa fa-list-ul" slot="overwrite-left"></i></a>
    </x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>

    <transition name="fade">
      <div class="chargeList" v-show="listShow">
        <div class="listHeader">
          <div class="headerL">
            电动车
          </div>
          <div class="headerR" @click="hideList()"><i class="fa fa-close (alias)" ></i></div>
        </div>
      </div>
    </transition>
    <!--蒙板  -->
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="hideList()"></div>
    </transition>

    <!-- <v-header></v-header> -->

  </div>
</template>
<script>
import header from '../../components/header/header'
import { XHeader, Actionsheet, TransferDom, Tab, TabItem } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    'v-header': header,
    XHeader,
    Actionsheet,
    TransferDom,
    Tab,
    TabItem,
    
  },
  data() {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false,
      fold: false
    }
  },
  computed: {
    listShow() {
      return this.fold;
    }
  },
  methods: {
    toogleList() {
      this.fold = !this.fold
    },
    hideList() { // 点击蒙板hide list
      this.fold = false;
    },
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import './home.less';

</style>


