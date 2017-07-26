import * as types from './mutation-types';
const mutations = {

  // 首页找桩点击切换
  [types.TOOGLE_FOLD](state) {
    state.fold = !state.fold;
  },
  // 记录用户信息
  
  //修改用户名
  [types.RESET_NAME](state,username) {
    state.username = username;
  }

}
export default mutations