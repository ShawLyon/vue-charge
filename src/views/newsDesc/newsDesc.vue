<template>
  <div class="newsDesc">
    <header class="header">
      <h3>系统消息</h3>
      <span>今天 3:54</span>
    </header>
    <section class="images">
       <img src="https://unsplash.it/300/200"> 
    </section>
    <section class="content">
      <p>平台系统将于今天晚上10:00进行硬件升级。</p>
    </section>
  </div>
</template>
<script>

export default {
  data(){
    return {

    }
  },
  components:{
   
  }
}
</script>
<style lang="less" scoped>
@import './newsDesc.less';
@import '../../common/less/variable.less';
</style>
