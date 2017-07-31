<template>
  <div class="myWallet">
    <section class="overMoney group">
      <h3 class="overMoney-title">余额
      </h3>
      <span>
        <strong class="moneyNum">300.00</strong>元</span>
    </section>
    <section class="allList">
      <!--显示全部  -->
      <ul v-if="listShow == 1">
        <li class="item" v-for="(item,index) in items">
          <div class="item-top">
            <span class="item-top-l">{{item.type}}</span>
          </div>
          <div class="item-bottom">
            <span class="item-bottom-l">
              <em>{{item.date}}</em>
            </span>
            <span class="item-bottom-r">
              <strong>+{{item.chargeMoney}}</strong>元
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
import { XButton } from 'vux'
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
    XButton
  },
  methods: {
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
