const mutations = {
  activeIndex(state,index) {
    state.chargeIndex = index;
  },
  toogleFold(state) {
    state.fold = !state.fold;
  }
}
export default mutations