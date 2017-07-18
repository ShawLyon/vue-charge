<template>
  <div class="home">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页</x-header>
    <x-header :left-options="{showBack: false}" class="hd-two">
      <tab :line-width="3" custom-bar-width="20px" active-color="#4478ac">
        <tab-item selected @on-item-click="onItemClick">电动车</tab-item>
        <tab-item @on-item-click="">汽车</tab-item>
      </tab>
      <!-- <tab>
          <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
          <tab-item @on-item-click="onItemClick">未发货</tab-item>
          <tab-item @on-item-click="onItemClick">全部订单</tab-item>
        </tab> -->
      <a slot="left" class="userIcon">
        <i class="fa fa-user-circle-o" slot="overwrite-left"></i>
        <badge class="userBadge"></badge>
      </a>
      <a slot="right" @click="toogleList">
        <i class="fa fa-list-ul" slot="overwrite-left"></i>
      </a>
    </x-header>
    <router-view></router-view>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  
    <transition name="fade">
      <div class="chargeList" v-show="listShow">
        <div class="listHeader">
          <div class="headerL">
            <span>电动车</span>
            <span>汽车</span>
          </div>
          <div class="headerR" @click="hideList()">
            <i class="fa fa-close (alias)"></i>
          </div>
        </div>
        <div class="listMainWrap" ref="listWrap">
          <ul class="listMain">
            <li class="main-item" v-for="(item,index) in chargeDesc">
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
import router from '../../router'
import BScroll from 'better-scroll'
import header from '../../components/header/header'
import { XHeader, XButton, Actionsheet, TransferDom, Tab, TabItem, Badge } from 'vux'
import { mapState, mapMutations } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  components: {
    'v-header': header,
    XHeader,
    XButton,
    Actionsheet,
    TransferDom,
    Tab,
    TabItem,
    Badge
  },
  data() {
    return {
      scrollY: 0,
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false,
      fold: false,
      
    }
  },
  computed: {
    listShow() {
      return this.fold;
    },
    ...mapState([
      'chargeDesc'
    ])
    

  },
  methods: {
    toogleList() {
      this.fold = !this.fold
    },
    hideList() { // 点击蒙板hide list
      this.fold = false;
    },
    jumpDetail(index, event) {
      // if(!event._constructed) return;
      this.$store.commit('activeIndex',index);
      console.log('点击次数' + index)
      router.push('/chargeDtail');
    },
    onItemClick() {
      router.push('/');
    },
    // 定义一个初始化scroll方法
     _initScroll() {
      this.listScroll = new BScroll(this.$refs.listWrap, {
        click: true,
        probeType: 3
      });
      this.listScroll.on('scroll', (pos) => {
        this.$emit('scroll',pos)
        console.log(pos.x + "~" + pos.y);
      })
    }
    // ...mapMutations([
    //   'activeIndex'
    // ])

  },
  created() {
    this.$nextTick(() => { 
      this._initScroll();
    }); // 等待DOM更新,执行回调函数
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import './home.less';
@import '../../common/less/variable.less';
</style>


