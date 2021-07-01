import {effectWatch} from './reactive/index.js'
import {mountElement,diff} from './render/index.js'
export function createApp(component){
  return {
    mount(rootContainer){
      const context = component.setup()
      let isMounted = true
      let prevSubTree;
      effectWatch(()=>{
        const subTree = component.render(context)
        if(isMounted){
          rootContainer.innerHTML = ``
          mountElement(subTree,rootContainer)
          isMounted = false
        }else{
          diff(prevSubTree,subTree)
        }
        prevSubTree = subTree
      })
    }
  }
}