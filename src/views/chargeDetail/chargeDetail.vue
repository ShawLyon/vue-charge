<template>
  <div class="chargeDetail">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">充电桩详情</x-header>
    <div class="chargeType">
      <div class="type-l">
        <h3>深圳市龙华新区</h3>
        <p>设备号: <span>5265465465</span></p>
        <p>充电类型: <span>慢充</span></p>
      </div>
      <div class="type-r">
        <x-button mini class="codeBtn">扫码充电</x-button>
      </div>
    </div>
    <div class="chargePort">
      <cell title="充电桩端口" value="value"></cell>
      <ul class="portList" >
        <li style="display: inline-block" class="item" v-for="(item,index) in items">
          <div class="index">{{index+1}}</div>
          <div class="status">{{item.status}}</div>
        </li>
      </ul>
    </div>
    <div class="chargeAddress">
      <div class="address-l">南山区北环大道333号</div>
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
        <!-- <p>{{item.promotion}}</p> -->
        <p>充200送50</p>
        <p>联系电话: 0755-2526 2566</p>
      </div>
    </div>
  </div>
</template>
<script >
import {XHeader,XButton,Cell} from 'vux'
export default {
  data() {
    return {
      items: [
        {type:1,status:'闲置'},
        {type:2,status:'使用中'},
        {type:3,status:'维护'}
      ],
      title: 'bbtt'
    }
      
  },
  props: {
    title: 'bbtt'
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

