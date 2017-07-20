<template>
  <div class="home">
    <v-header></v-header>
    <x-header :left-options="{showBack: false}" class="hd-two">
      <tab :line-width=6 active-color='#4478ac' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <a slot="left" class="userIcon">
        <i class="fa fa-user-circle-o" slot="overwrite-left"></i>
        <badge class="userBadge"></badge>
      </a>
      <a slot="right" @click="toogleList">
        <i class="fa fa-list-ul" slot="overwrite-left"></i>
      </a>
    </x-header>
    
    <div class="mapContent">
     <swiper v-model="index" height="100px" :show-dots="false" >
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
    

    <transition name="fade">
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
import header from 'components/header/header'
import listCar from 'components/listCar/listCar'
import { XHeader, XButton, Actionsheet, TransferDom, Tab, TabItem, Badge, Swiper, SwiperItem } from 'vux'
import { mapState, mapMutations } from 'vuex'

const list = () => ['电动车', '汽车']
export default {
  directives: {
    TransferDom
  },
  components: {
    'v-header': header,
    'list-car': listCar,
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
    }

  },
  created() {

  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import './home.less';
@import '~common/less/variable.less';
</style>


