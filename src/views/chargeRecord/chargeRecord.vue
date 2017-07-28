<template>
  <div class="chargeRecord">
    <ul class="addMoney-list">
      <li class="item" v-for="(item,index) in items">
        <div class="item-top">
          <span class="item-top-l">充值</span>
          <span class="item-top-r">
            <strong>+{{item.addMoney}}</strong>元</span>
        </div>
        <div class="item-bottom">
          <span class="item-bottom-l">账号余额：{{item.overMoney}}元</span>
          <span class="item-bottom-r">
            <em>{{item.date}}</em>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          addMoney: 50,
          overMoney: 100,
          date: '1999-09-09 09-09'
        },
        {
          addMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        },
        {
          addMoney: 100,
          overMoney: 200,
          date: '1999-09-09 09-09'
        }
      ]
    }
  }
}
</script>
<style lang="less">
@import './chargeRecord.less';
@import '../../common/less/variable.less';
</style>


