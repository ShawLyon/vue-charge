<template>
  <div class="myinfo">
    <!-- <group>
                  <cell title="头像" is-link link="" :border-intent="false">
                    <img src="https://unsplash.it/300/200/?random" width="45px" height="45px" style="border-radius: 50%;" slot="default">
                  </cell>
                    <input type="file">
                  <cell title="昵称" is-link link="/myself/setnickname" :border-intent="false" :value="nickname" @click.native="changeNickname"></cell>
                </group> -->
    <section class="headportrait">
      <input type="file" class="myinfo-nickname-upload" @change="uploadAvatar">
      <h2>头像</h2>
      <div class="headportrait-div">
        <img v-if="userInfo" src="https://unsplash.it/300/200/?random" class="headportrait-div-top">
        <span v-else class="headportrait-div-top">
          <img src="http://placehold.it/300x200">
        </span>
        <span class="headportrait-div-bottom">
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </section>
    <router-link to="/myself/setnickname" tag="div">
      <section class="nickname">
        <h2>昵称</h2>
        <div class="nickname-div">
          <span class="nickname-div-top">
            {{nickname}}
          </span>
          <span class="nickname-div-bottom">
            <i class="fa fa-angle-right"></i>
          </span>
        </div>
      </section>
    </router-link>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
  data() {
    return {
      nickname: '小名',
      userInfo: true,
      nickname: '28'
    }
  },
  components: {
    Group,
    Cell
  },
  computed: {

  },
  methods: {
    changeNickname() {
      // router.push('')
    }
  }
}
</script>
<style lang="less">
@import './myinfo.less';
</style>


