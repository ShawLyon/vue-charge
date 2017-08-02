<template>
  <div class="myself">
    <router-link :to="true?'/myself/myinfo':'/login'" tag="div">
      <header class="header">
        <div class="head-portrait">
          <img src="https://unsplash.it/300/200/?random" width="45px" height="45px">
        </div>
        <div class="head-info">
          <span class="username">name</span>
          <span class="tel">13265161094</span>
        </div>
      </header>
    </router-link>
    <group>
      <cell title="充电记录" is-link link="/myself/mycharge">
        <img src="./chongdian_jilu.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="充值记录" is-link link="/myself/chargeRecord">
        <img src="./chongzhi_jilu.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="钱包" is-link link="/myself/myWallet">
        <img src="./qianbao.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="现金券" is-link link="/myself/cash">
        <img src="./xianjinquan.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
    <group>
      <cell title="电卡充值" is-link link="/myself/cardCharge">
        <img src="./dianka_chongzhi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="电卡挂失解挂" is-link link="/myself/cardLoss">
        <img src="./guashi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
    <group>
      <cell title="商务合作" is-link link="/myself/busineCooper">
        <img src="./shangwu_hezuo.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="消息" is-link link="/myself/news">
        <img src="./xiaoxi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
        <!-- <badge text="8"></badge> -->
        <div class="badge-value" slot="value">
          <span class="vertical-middle">&nbsp;</span>
          <badge text="8"></badge>
        </div>
      </cell>
      <cell title="使用帮助"  is-link link="/myself/useHelp">
        <img src="./shiyong_bangzhu.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
    <group>
      <cell title="设置" is-link link="/myself/setting">
        <img src="./shezhi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
  </div>
</template>
<script>
import router from 'router'
import { Group, Cell,Badge } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Badge
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
@import './myself.less';
@import '../../common/less/variable.less';
</style>

