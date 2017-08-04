<template>
  <div class="feedback">
    <group style="padding: 0 0.714rem;">
      <x-textarea v-model="value" show-counter :max="140" placeholder="说说您的看法和建议" :rows="6" :cols="30"></x-textarea>
    </group>
    <footer class="footer">
      <x-button class="submit-btn" @click.native="submit">提交</x-button>
    </footer>
  </div>
</template>
<script>
import { Group, XTextarea, XButton } from 'vux'
export default {
  components: {
    Group,
    XTextarea,
    XButton
  },
  methods: {
    submit() {
      alert(111)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../common/less/mixin.less';
.feedback {
  .child-z-index;
}

.footer {
  margin-top: 1rem;
  padding: 0 0.714rem;
  .submit-btn {
    border-radius: 99px;
    .btc;
  }
}
</style>
