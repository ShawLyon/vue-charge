import * as types from './mutation-types';
const mutations = {

  [types.TOOGLE_FOLD](state) {
    state.fold = !state.fold;
  },
  [types.SET_TITLE_TEXT](state,title) {
    state.titleText = title
  }
}
export default mutations