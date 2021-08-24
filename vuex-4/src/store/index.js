import { createStore } from 'vuex';
import test from './module/test';
const store = createStore({
  state() {
    return {
      name: 'vuex'
    };
  },
  mutations: {
    setName(state, name) {
      console.log('%c store mutation', 'color:yellow');
      state.name = name || '张飞';
    },
    log() {
      console.log('store log');
    }
  },
  actions: {
    setName({ commit }, payLoad) {
      console.log('%c store action', 'color:yellow');
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setName', payLoad);
          resolve(true);
        }, 2000);
      });
    }
  },
  getters: {
    getName(state) {
      return state.name + ' 吃了一口饭';
    },
    getFullName(state, getters) {
      console.log(getters.getName);
      return (tag) => state.name + tag;
    }
  }
  // modules: {
  //   test
  // }
});
if (!store.hasModule('test')) {
  store.registerModule('test', test);
}
setTimeout(() => {
  store.unregisterModule('test');
}, 1000);
export default store;
