<template>
  <div class="historyDesc">
    <section class="group group-top">
      <span>已完成</span>
    </section>
    <section class="group group-user-info">
      <h3>用户信息</h3>
      <ul>
        <li class="li-item">
          <span>姓名</span>
          <span>{{username}}</span>
        </li>
        <li class="li-item">
          <span>手机号</span>
          <span>{{phone}}</span>
        </li>
        <li class="li-item">
          <span>充电单价</span>
          <span>{{price}}</span>
        </li>
        <li class="li-item">
          <span>充电时长/电量</span>
          <span>{{time}}</span>
        </li>
        <li class="li-item">
          <span>支付方式</span>
          <span>{{payType}}</span>
        </li>
        <li class="li-item">
          <span>金额</span>
          <span>{{money}}</span>
        </li>
      </ul>
    </section>
    <section class="group group-charge-time">
      <h3>充电时间</h3>
      <section class="charge-time-chart">
        <div class="chart-top">共2小时<br><strong style="color: #666;font-size: .8rem;">(断电1小时)</strong></div>
        <div class="chart-main">
          <span>开始</span>
          <p class="chart-line">
          </p>
          <span>结束</span>
        </div>
        <div style="text-align: center">充电量: 0.5KW</div>
        <div class="chart-bottom">
          <span>
            <b>2017-06-04</b>
            <em>09:50</em>
          </span>
          <span>
            <b>2017-06-04</b>
            <em>09:50</em>
          </span>
        </div>
      </section>
      <ul>
        <li>
          <span>充电设备: {{device}}
            <em style="margin-left: 2rem">{{port}}端口</em>
          </span>
        </li>
        <li>
          <span>充电位置: {{address}}</span>
        </li>
      </ul>
    </section>
    <footer>
      <span><i class="fa fa-question-circle fa-lg" style="color: #4478ac;"></i>对充电有疑问</span>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: 'xl',
      phone: 132365656,
      price: 12,
      time: 1,
      payType: '支付宝',
      money: 1,
      device: 331313155,
      port: 2,
      address: '深圳市南山区'
    }
  }
}
</script>
<style lang="less" scoped>
@import './historyDesc.less';
@import '../../../common/less/variable.less';
</style>


