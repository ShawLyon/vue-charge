<template>
  <div class="bgModel" @touchmove.prevent>
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
.bgModel {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  z-index: 200;
}
</style>