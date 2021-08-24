export default {
  namespaced: true,
  state: () => {
    return {
      name: '河北',
      age: '19'
    };
  },
  mutations: {
    setName(state, name) {
      console.log('%c test mutation', 'color:red');
      state.name = name || '张飞';
    }
  },
  actions: {
    testlog:{
      root:true,
      handler(){
        console.log('testlog')
      }
    },
    setName({ commit, rootState, getters, rootGetters }, payLoad) {
      
      console.log('%c test action', 'color:red');
      console.log(getters, rootGetters, rootState);
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setName', payLoad);
          resolve(true);
        }, 2000);
      });
    }
  },
  getters: {
    getName(state, getters, rootState, rootGetters) {
      console.log(state, getters, rootState, rootGetters);
      return state.name;
    }
  }
};
