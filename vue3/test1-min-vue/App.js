import {effectWatch,reactive} from './core/reactive/index.js'
import {h} from './core/h.js'
export default {
  render(state){
    return h('div',{
      class:'red' + state.state.count
    },state.state.count)
  },
  setup() {
    const state = reactive({
      count:0
    })
    window.state = state
    return {state}
  }
}
