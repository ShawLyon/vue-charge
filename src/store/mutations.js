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
  },
  //充值'其他' 输入的金额
  [types.SELECT_MONEY](state,money) {
    state.selectMoney = money;
  }
}
export default mutations