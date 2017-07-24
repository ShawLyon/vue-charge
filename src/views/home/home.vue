<template>
  <div class="home">
    <x-header :left-options="{showBack: false}" class="hd-two">
      <tab :line-width=6 active-color='#4478ac' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <a slot="left" class="userIcon" @click="goUserCentent">
        <i class="fa fa-user-circle-o" slot="overwrite-left"></i>
        <badge class="userBadge"></badge>
      </a>
      <a slot="right" @click="toogleList" class="meun">
        <i class="fa fa-list-ul" slot="overwrite-left"></i>
        <span class="meun-text">找桩</span>
      </a>
    </x-header>
    
    <div class="mapContent">
     <swiper v-model="index" height="100px" :show-dots="false" >
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
    

    <transition name="chargelist">
      <list-car v-if="listShow"></list-car>    
    </transition>
    <!--蒙板  -->
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="toogleList()"></div>
    </transition>
  
  </div>
</template>
<script>
import router from 'router'
import ListCar from 'components/listCar/listCar'
import { XHeader, XButton, Actionsheet, TransferDom, Tab, TabItem, Badge, Swiper, SwiperItem } from 'vux'
import { mapState, mapMutations } from 'vuex'

const list = () => ['电动车', '汽车']
export default {
  directives: {
    TransferDom
  },
  components: {
    ListCar,
    XHeader,
    XButton,
    Actionsheet,
    TransferDom,
    Tab,
    TabItem,
    Badge,
    Swiper, 
    SwiperItem
  },
  data() {
    return {
      list2: list(),
      demo2: '美食',
      index: 0,
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false,    
    }
  },
  computed: {
    listShow() {
      return this.fold;
    },
    ...mapState([
      'chargeDesc',
      'fold'
    ])
  },
  methods: {
    ...mapMutations([
      'TOOGLE_FOLD'
    ]),
    toogleList() {
      this.TOOGLE_FOLD();
    },
    goUserCentent() {
      this.$router.push('/login');
    }

  },
  created() {

  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
@import './home.less';
@import '~common/less/variable.less';
</style>


