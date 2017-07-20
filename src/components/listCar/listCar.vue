<template>
  <div class="chargeList">
    <div class="listHeader">
      <div class="headerL">
        <router-link to="/listEleCar">
          <span class="">电动车</span>
        </router-link>
        <router-link to="listSteamCar">
          <span class="">汽车</span>
        </router-link>
      </div>
      <div class="headerR" @click="hideList()">
        <i class="fa fa-close (alias)"></i>
      </div>
    </div>
    <div class="listContent">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from '../../router'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {

    }
  },

  methods: {
    ...mapMutations([
      'TOOGLE_FOLD'
    ]),
    hideList() { // 点击 X   hide list
      this.TOOGLE_FOLD();
    },

  },
  mounted() {
  }

}
</script>
<style lang="less">
@import '../../common/less/variable.less';
@import './listCar.less';
</style>


