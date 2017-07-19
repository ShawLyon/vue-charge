<template>
  <div class="chargeDetail">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">充电桩详情</x-header>
    <div class="chargeType">
      <div class="type-l">
        <h3>{{chargeDesc[chargeIndex].name}}</h3>
        <p>设备号: <span>{{chargeDesc[chargeIndex].device}}</span></p>
        <p>充电类型: <span>{{chargeDesc[chargeIndex].type}}</span></p>
      </div>
      <div class="type-r">
        <x-button mini class="codeBtn">扫码充电</x-button>
      </div>
    </div>
    <div class="chargePort">
      <cell title="充电桩端口" value="value"></cell>
      <ul class="portList" >
        <li style="display: inline-block" class="item" v-for="(item,index) in chargeDesc" :class="[item.status==0 ? usedColor: maintainColor]">
          <div class="index">{{index+1}}</div>
          <div class="status" >{{item.status}}</div>
        </li>
      </ul>
    </div>
    <div class="chargeAddress">
      <div class="address-l">{{chargeDesc[chargeIndex].address}}</div>
      <div class="address-r">去这里</div>
    </div>
    <div class="chargeDesc">
      <h3>收费说明</h3>
      <div>
        <p>
          <span>6:00-18:00(高峰)</span>
          <span>1.5元/小时</span>
        </p>
        <p>
          <span>6:00-18:00(高峰)</span>
          <span>1.5元/小时</span>
        </p>
      </div>
      <div>
        <p>{{chargeDesc[chargeIndex].promotion}}</p>
        <p>联系电话: {{tel}}</p>
      </div>
    </div>
  </div>
</template>
<script >
import {XHeader,XButton,Cell} from 'vux'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      items: [
        {type:1,status:'闲置'},
        {type:2,status:'使用中'},
        {type:3,status:'维护'}
      ],
      chargeIndex: chargeIndex,
      activeColor: '#4478ac',
      usedColor: 'used',
      maintainColor: 'maintain',
    }
  },
  props: {
 
  },
  computed: {
    ...mapState([
      'chargeIndex',
      'chargeDesc',
      'tel'
    ]),

    
  },
  components: {
    XHeader,
    XButton,
    Cell
  }
}
</script>
<style  lang="less" scoped>
@import './chargeDetail.less';
@import '../../common/less/variable.less';
</style>

