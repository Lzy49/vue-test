import Vue from 'vue'
import App from './page/slot-test.vue'

Vue.config.productionTip = false
/* 混入模式 */
Vue.mixin({
  created(){
    console.log('不管运行那个组件都会运行我，因为我是混用哦')
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')

