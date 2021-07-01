/* 需要开启 runtimeCompiler 才可以用 */
import Vue from 'vue'
let Component = Vue.extend({
  template:'<div>我是 Component 渲染的</div>'
})

let ComponentPro = Vue.extend(Component);

export default new ComponentPro({
  created(){
    console.log('created')
  }
})