<template>
  <div class="cash">
    <section class="tab-bar">
      <tab :line-width="1" custom-bar-width="60px" active-color="#4478ac">
        <tab-item selected @on-item-click="changeShow(1)">可使用</tab-item>
        <tab-item @on-item-click="changeShow(2)">已使用</tab-item>
        <tab-item @on-item-click="changeShow(3)">已过期</tab-item>
      </tab>
      <p class="ticketDesc" @click="protocolShow = true">券使用说明</p>
      <section class="allList">
        <!--显示 可使用 -->
        <section v-if="listShow == 1">
          <ul class="ul-one">
            <li class="item item-10">
              <div class="item-top">
                <span class="item-top-l">
                  <em>￥</em>
                  <em>10</em>
                </span>
                <span class="item-top-r">
                  <em>剩余
                    <strong>2</strong>元</em>
                  <em>券可芬多次抵扣</em>
                  <em>有效期至：2017.09.10</em>
                </span>
              </div>
              <div class="item-bottom">
                <span>可使用门店：华侨城、翰林小区、星港澳元</span>
              </div>
            </li>
            <li class="item item-5">
              <div class="item-top">
                <span class="item-top-l">
                  <em>￥</em>
                  <em>5</em>
                </span>
                <span class="item-top-r">
                  <em>剩余
                    <strong>2</strong>元</em>
                  <em>券可芬多次抵扣</em>
                  <em>有效期至：2017.09.10</em>
                </span>
              </div>
              <div class="item-bottom">
                <span>可使用门店：华侨城、翰林小区、星港澳元</span>
              </div>
            </li>
          </ul>
        </section>
  
        <!-- 显示 已使用  -->
        <section v-else-if="listShow == 2">
          <ul class="ul-two">
            <li class="item item-10">
              <div class="item-top">
                <span class="item-top-l">
                  <em>￥</em>
                  <em>10</em>
                </span>
                <span class="item-top-r">
                  <em>剩余
                    <strong>2</strong>元</em>
                  <em>券可芬多次抵扣</em>
                  <em>有效期至：2017.09.10</em>
                </span>
              </div>
              <div class="item-bottom">
                <span>可使用门店：华侨城、翰林小区、星港澳元</span>
              </div>
              <img src="./yishiyong.png" class="stamp">
            </li>
            <li class="item item-5">
              <div class="item-top">
                <span class="item-top-l">
                  <em>￥</em>
                  <em>5</em>
                </span>
                <span class="item-top-r">
                  <em>剩余
                    <strong>2</strong>元</em>
                  <em>券可芬多次抵扣</em>
                  <em>有效期至：2017.09.10</em>
                </span>
              </div>
              <div class="item-bottom">
                <span>可使用门店：华侨城、翰林小区、星港澳元</span>
              </div>
              <img src="./yishiyong.png" class="stamp">
            </li>
          </ul>
        </section>
  
        <!--显示 已过期  -->
        <section v-else class="expired">
          <!-- 有过期  -->
          <ul class="ul-three" v-if="items">
            <li class="item item-10">
              <div class="item-top">
                <span class="item-top-l">
                  <em>￥</em>
                  <em>10</em>
                </span>
                <span class="item-top-r">
                  <em>剩余
                    <strong>2</strong>元</em>
                  <em>券可芬多次抵扣</em>
                  <em>有效期至：2017.09.10</em>
                </span>
              </div>
              <div class="item-bottom">
                <span>可使用门店：华侨城、翰林小区、星港澳元</span>
              </div>
              <img src="./yiguoqi.png" class="stamp">
            </li>
            <li class="item item-5">
              <div class="item-top">
                <span class="item-top-l">
                  <em>￥</em>
                  <em>5</em>
                </span>
                <span class="item-top-r">
                  <em>剩余
                    <strong>2</strong>元</em>
                  <em>券可芬多次抵扣</em>
                  <em>有效期至：2017.09.10</em>
                </span>
              </div>
              <div class="item-bottom">
                <span>可使用门店：华侨城、翰林小区、星港澳元</span>
              </div>
              <img src="./yiguoqi.png" class="stamp">
            </li>
          </ul>
          <!-- 无过期  -->
          <div class="no-expired" v-else>
            <img src="./quan.png" alt="">
            <span>没有未过期的现金券</span>
          </div>
        </section>
      </section>
    </section>
    <!-- 券使用说明  -->
    <transition name="fade">
      <bg-model v-show="protocolShow">
        <p class="user-protocol">尚亿源为电动车车载充电机提供交流电源的供电装置，同时具备计量计费功能，可以实现监视并控制被充电池状态。</p>
        <p class="user-protocol-close" >
          <i class="fa fa-close fa-3x" @click="protocolShow = false"></i>
        </p>
      </bg-model>
    </transition>
  </div>
</template>
<script>
import BgModel from 'components/BgModel/BgModel'
import { Tab, TabItem } from 'vux'
export default {
  data() {
    return {
      protocolShow: false,
      listShow: 1,
      items: ''
    }
  },
  components: {
    Tab,
    TabItem,
    BgModel
  },
  methods: {
    changeShow(type) {
      this.listShow = type;
    }
  }
}
</script>
<style lang="less" scoped>
@import './cash.less';
@import '../../common/less/variable.less';
</style>

