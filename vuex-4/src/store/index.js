import { createStore } from 'vuex';
import test from './module/test';
import pluginTest from './plugins/test';
const store = createStore({
  strict: import.meta.env.DEV,
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
    },
    set(state, { key, value }) {
      state[key] = value;
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
    },
    test({ dispatch }) {
      console.log('test');
      return dispatch('setName');
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
  },
  // modules: {
  //   test
  // },
  plugins: [pluginTest]
});
if (!store.hasModule('test')) {
  store.registerModule('test', test);
}
store.subscribeAction(
  (aciton, state) => {
    console.log(state);
    console.log('%c subscribeAction', 'color:green');
  },
  { prepend: false }
);
// store.subscribeAction({
//   before: (action, state) => {
//     console.log(`before action ${action.type}`);
//   },
//   after: (action, state) => {
//     console.log(`after action ${action.type}`);
//   }
// });
setTimeout(() => {
  // store.unregisterModule('test');
}, 1000);
export default store;
