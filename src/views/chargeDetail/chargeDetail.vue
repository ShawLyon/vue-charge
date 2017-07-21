<template>
  <div class="chargeDetail">
    <div class="chargeType">
      <div class="type-l">
        <h3>{{ $route.params.name }}</h3>
        {{$route.params.titleType}}
        <p>设备号: &nbsp;
          <span>{{$route.params.device}}</span>
        </p>
        <p>充电类型: &nbsp;&nbsp;&nbsp;&nbsp;
          <span>{{$route.params.type}}</span>
        </p>
      </div>
      <div class="type-r">
        <x-button mini class="codeBtn">扫码充电</x-button>
      </div>
    </div>
    <div class="chargePort">
      <cell title="充电桩端口" :value="ableUse+'个能用'"></cell>
      <ul class="portList">
        <li style="display: inline-block" class="item" v-for="(item,index) in chargeDesc" :class="[item.status==0 ? usedColor: maintainColor]">
          <div class="index">{{index+1}}</div>
          <div class="status">{{item.status}}</div>
        </li>
      </ul>
    </div>
    <div class="chargeAddress">
      <div class="address-l">{{$route.params.address}}</div>
      <div class="address-r">去这里</div>
    </div>
    <div class="chargeDesc">
      <h3>收费说明</h3>
      <div class="timeTable">
        <p>
          <span>6:00-18:00(高峰)</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>1.5元/小时</span>
        </p>
        <p>
          <span>6:00-18:00(高峰)</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>1.5元/小时</span>
        </p>
      </div>
      <div class="telDesc">
        <p class="promotion">{{$route.params.promotion}}</p>
        <p>联系电话: {{tel}}</p>
      </div>
    </div>
  </div>
</template>
 <script >
import { XButton, Cell } from 'vux'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      items: [
        { type: 1, status: '闲置' },
        { type: 2, status: '使用中' },
        { type: 3, status: '维护' }
      ],
      ableUse: 9,
      activeColor: '#4478ac',
      usedColor: 'used',
      maintainColor: 'maintain',
    }
  },
  computed: {
    ...mapState([
      'chargeDesc',
      'tel'
    ])
  },
  components: {
    XButton,
    Cell
  }
}
</script>
<style  lang="less" scoped>
@import './chargeDetail.less';
@import '~common/less/variable.less';
</style>

