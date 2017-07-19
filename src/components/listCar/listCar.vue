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
      // 接着在父组件内 // watch $route 决定使用哪种过渡
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import router from '../../router'

export default {
  data() {
    return {

    }
  },

  methods: {
    hideList() { // 点击 X   hide list
      this.$store.commit('toogleFold');
    },

  },
  mounted() {
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/listEleCar').length
      const fromDepth = from.path.split('/listSteamCar').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
<style lang="less">
@import '../../common/less/variable.less';
@import './listCar.less';
</style>


