<template>
  <div class="header">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页<a slot="left">关闭</a>  </x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
    <div class="header-top">
      <div class="user-icon">
        <img src="./user.png" alt="">
        <badge class="user-badge" v-show="demo2"></badge>
      </div>
      <div class="cell-item" @click="toogleList">
        <img src="./liebiao.png" alt="">
      </div>    
    </div>
    <transition name="fade">
      <div class="chargeList" v-show="listShow">
        <div class="listHeader">
          <div class="headerL">
            电动车
          </div>
          <div class="headerR" @click="hideList()"><img src="./white_close.png" alt=""></div>
        </div>
      </div>
    </transition>

       <x-button plain class="codeFlow" type="defluat" mini="true" style="border-radius:99px;">扫码充电</x-button>
   
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="hideList()"></div>
    </transition>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem, Badge, XHeader, XButton } from 'vux'
import { TransferDom, Popup, XSwitch,Group, Cell} from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']
export default {
  directives: {
    TransferDom
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Badge, //微章 
    Popup,
    XSwitch,
    XHeader,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      list2: list(),
      demo2: '美食',
      index: 0,
      show2: false,
      fold: false,
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
  computed: {
    listShow() {
      return this.fold;  
    }
  },
  methods: {
    onItemClick(index) {
      console.log('fuck', index)
    },
    toogleList() { //点击切换list显示隐藏
      this.fold = !this.fold;
    },
    hideList() { // 点击蒙板hide list
      this.fold = false;
    },
    resetScroller () {
      this.$nextTick(() => {
        this.$refs.scroller.reset()
      })
    },
  },
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.header {
  // height: 88px;
  background-color: #fff;

}
.header-top {
  overflow: hidden;
  .user-icon {
    float: left; 
    position: relative;
    .user-badge {
      position: absolute;
      top: 10px;
      right: 0;
    }
  }
  .cell-item {
    float: right;
  }

}
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
/* chargeList */
.chargeList {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 20;
  .listHeader {
    display: flex;
    -webkit-display: flex;
    align-items: center; //垂直居中
    -webkit-align-items: center; //垂直居中
    justify-content:space-between;
    -webkit-justify-content:space-between;
    background: #4478ac;
    height: 88px;

    .headerL {
      float: left;
      vertical-align: middle;
      .listTab {     
        width: 200px; 
        background: #4478ac;
        .tabItem {
          color: #fff;
        }
      }
    }
    .headerR {
      float: right;
    }
  }
}
.codeFlow {
  display: flex;
  bottom: 100px;
  left: 50%;
  margin: 0 auto;
  color: #fff;
  background: rgba(0, 0, 0, .7);
}
.list-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 10;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}


@import '~vux/src/styles/close.less';

.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>