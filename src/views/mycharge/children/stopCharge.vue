<template>
  <div class="stopCharge">
    <form action="">
      <section class="group stop-cause">
        <h3>停止原因</h3>
        <div class="cause-list">
          <input type="radio" id="one" v-model="lyon" value="有急事" @click="hideTextInput">
          <label for="one">有急事</label>
          <br>
          <input type="radio" id="two" v-model="lyon" value="不想充了" @click="hideTextInput">
          <label for="two">不想充了</label>
          <br>
          <input type="radio" id="other" v-model="lyon" value="其他" @click="showTextInput">
          <label for="other">其他</label>
        </div>
      </section>
      <section class="other-text-input">
        <group v-if="show">
          <x-textarea :max="200" name="detail" placeholder="其他原因:" :show-counter="false"></x-textarea>
        </group>
        <p>请拔下插座</p>
      </section>
    </form>
    <section class="group charge-desc">
      <h3>充电信息</h3>
      <ul>
        <li>充电时长: 2小时</li>
        <li>充电电量: 0.5kw/h</li>
        <li>充电金额: ￥2.00(含0.4元代金券)</li>
        <li>充电时间: 6/12 12:00 - 6/12 13:00</li>
      </ul>
    </section>
    <footer class="footer">
      <x-button class="enter-btn">确定</x-button>
    </footer>
  </div>
</template>
<script>
import { Group, XTextarea, XButton } from 'vux'
export default {
  data() {
    return {
      stopCause: ['有急事', '不想充了'],
      lyon: '',
      show: false
    }
  },
  components: {
    Group,
    XTextarea,
    XButton
  },
  methods: {
    showTextInput() {
      this.show = true;
    },
    hideTextInput() {
      this.show = false;
    },
    change(value) {
      console.log('change:', value);
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../common/less/variable.less';
@import './stopcharge.less';
</style>

