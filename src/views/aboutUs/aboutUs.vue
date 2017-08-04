<template>
  <div class="aboutUs">
    <div class="logo">
      <span style="width: 6.893rem; height: 6.214rem">
        <img src="./logo.png" width="100%" height="100%">
      </span>
      <span style="font-size: 1.286rem; margin-top: 1.214rem">版本: 1.0.1</span>
    </div>
    <div class="txt">
      <p>尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元尚忆源上亿元</p>
    </div>
    <section class="bottom-info">
      <div class="tel">
        <x-button class="tel-btn">联系电话: 400-161-2009</x-button>
      </div>
      <footer class="footer">
        <p>深圳尚亿创新科技有限公司</p>
      </footer>
    </section>
  
  </div>
</template>
<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  }
}
</script>
<style lang="less" scoped>
@import '../../common/less/mixin.less';
.aboutUs {
  .child-z-index;
}

.logo {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 3.214rem 0;
}

.txt {
  margin-top: 1rem;
  padding: .714rem;
  background: #fff;
  line-height: 1.5rem;
  color: #333;
}

.bottom-info {
  position: fixed;
  left: 0;
  // top: 0;
  right: 0;
  bottom: .714rem;
}

.tel {
  padding: 0 1.786rem;
}

.tel-btn {
  border-radius: 99px;
  .btc;
}

.footer {
  margin-top: 2.5rem;
  text-align: center;
}
</style>
