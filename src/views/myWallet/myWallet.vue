<template>
  <div class="myWallet">
    <section class="overMoney group">
      <h3 class="overMoney-title">余额
        <em class="Details">明细</em>
      </h3>
      <span>
        <strong class="moneyNum">300.00</strong>元</span>
    </section>
    <section class="tab-bar group">
      <tab :line-width="1" custom-bar-width="60px" active-color="#4478ac">
        <tab-item selected @on-item-click="changeShow(1)">全部</tab-item>
        <tab-item @on-item-click="changeShow(2)">充值</tab-item>
        <tab-item @on-item-click="changeShow(3)">消费</tab-item>
      </tab>
    </section>
    <section class="allList">
      <!--显示全部  -->
      <ul v-if="listShow == 1">
        <li class="item" v-for="(item,index) in items">
          <div class="item-top">
            <span class="item-top-l">{{item.type}}</span>
            <span class="item-top-r">
              <strong>+{{item.chargeMoney}}</strong>元</span>
          </div>
          <div class="item-bottom">
            <span class="item-bottom-l">账号余额：{{item.overMoney}}元</span>
            <span class="item-bottom-r">
              <em>{{item.date}}</em>
            </span>
          </div>
        </li>
      </ul>
      <!-- 显示 充值  -->
      <ul v-else-if="listShow == 2">
        <li class="item" v-for="(item,index) in items" v-show="item.type=='充值'">
          <div class="item-top">
            <span class="item-top-l">{{item.type}}</span>
            <span class="item-top-r">
              <strong>+{{item.chargeMoney}}</strong>元</span>
          </div>
          <div class="item-bottom">
            <span class="item-bottom-l">账号余额：{{item.overMoney}}元</span>
            <span class="item-bottom-r">
              <em>{{item.date}}</em>
            </span>
          </div>
        </li>
      </ul>
      <!--显示 消费  -->
      <ul v-else>
        <li class="item" v-for="(item,index) in items" v-show="item.type=='消费'">
          <div class="item-top">
            <span class="item-top-l">{{item.type}}</span>
            <span class="item-top-r">
              <strong>+{{item.chargeMoney}}</strong>元</span>
          </div>
          <div class="item-bottom">
            <span class="item-bottom-l">账号余额：{{item.overMoney}}元</span>
            <span class="item-bottom-r">
              <em>{{item.date}}</em>
            </span>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <x-button class="chargeMoney-btn" @click.native="goAddMoney">充值</x-button>
    </footer>
  </div>
</template>
<script>
import router from 'router'
import { Tab, TabItem, XButton } from 'vux'
export default {
  data() {
    return {
      listShow: 1,
      items: [
        {
          type: '充值',
          chargeMoney: 50,
          overMoney: 100,
          date: '1999-09-09 09-09'
        },
        {
          type: '消费',
          chargeMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        },
        {
          type: '充值',
          chargeMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        },
        {
          type: '充值',
          chargeMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        },
        {
          type: '充值',
          chargeMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        },
        {
          type: '充值',
          chargeMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        },
        {
          type: '充值',
          chargeMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        },
        {
          type: '充值',
          chargeMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        }
      ]
    }
  },
  components: {
    Tab,
    TabItem,
    XButton
  },
  methods: {
    changeShow(type) {
      this.listShow = type;
    },
    goAddMoney() {
      router.push('/addMoney');
    }
  }
}
</script>
<style lang="less" scoped>
@import './myWallet.less';
@import '../../common/less/variable.less';
</style>
