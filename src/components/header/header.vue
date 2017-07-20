<template>
  <div class="header">
    <x-header :right-options="{showMore: true}" :left-options.backText="首页" @on-click-more="showMenus = true">{{titleText}}</x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>
<script>
import { XHeader, Actionsheet, TransferDom } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    XHeader,
    Actionsheet,
    TransferDom
  },
  data() {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false,
    }
  },
  computed: {
    ...mapState([
      'titleText'
    ])
  }
}
</script>
<style lang="less" scoped>

</style>