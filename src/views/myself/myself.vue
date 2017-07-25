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
      <cell title="充电记录" is-link link="/mycharge">
        <img src="./chongdian_jilu.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="充值记录" is-link>
        <img src="./chongzhi_jilu.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="钱包" is-link>
        <img src="./qianbao.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="现金券" is-link>
        <img src="./xianjinquan.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
    <group>
      <cell title="电卡充值" is-link>
        <img src="./dianka_chongzhi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="电卡挂失解挂" is-link>
        <img src="./guashi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
    <group>
      <cell title="商务合作" is-link>
        <img src="./dianka_chongzhi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="消息" is-link>
        <img src="./xiaoxi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
      <cell title="使用帮助">
        <img src="./shiyong_bangzhu.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
    <group>
      <cell title="设置" is-link>
        <img src="./shezhi.png" width="18" style="display:block;margin-right:12px;" slot="icon"></img>
      </cell>
    </group>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  }
}
</script>
<style lang="less" scoped>
@import './myself.less';
@import '../../common/less/variable.less';
</style>

