// 响应式库
let currentEffect
// 依赖
// 依赖对象
class Dep {
  constructor(val){
    this.effects = new Set()
    this._val = val
  }
  get value(){
    this.depend()
    return this._val
  }
  set value(newVal){
    this._val = newVal
    this.notice()
  }
  // 1. 收集依赖
  depend(){
    if(currentEffect){
      this.effects.add(currentEffect)
    }
  }
  // 2. 触发依赖
  notice(){
    this.effects.forEach(effect=>effect())
  }
}

// 收集监听
export const effectWatch = (effect)=>{
  currentEffect = effect
  effect()
  currentEffect = null
}

// reactive
// 获得依赖对象
const getDep = (target,key)=>{
  let depMap = targetMap.get(target)
  if(!depMap){
    depMap = new Map()
    targetMap.set(target,depMap)
  }
  let dep = depMap.get(key)
  if(!dep){
    dep = new Dep()
    depMap.set(key,dep)
  }
  return dep
}
let targetMap = new Map();
// 创建依赖
export  const reactive = (raw)=>{
  return new Proxy(raw,{
    get(target, key){
      let dep = getDep(target,key)
      dep.depend()
      return Reflect.get(target,key)
    },
    set(target, key, value){
      let dep = getDep(target,key)
      let result = Reflect.set(target,key,value)
      dep.notice()
      return result
    }
  })
}

// 总结
/*

### Dep 类 
用来和值绑定到一起 拥有 2 个方法 1 个属性

- depend 检测是否有依赖，如果有则添加
- notice 通知所有依赖执行

- get value 用来监听值被调用 调用 depend
- set value 用来监听值被修改 调用 notice

### effectWatch 方法 
用来定义依赖。做了以下动作
1. 把 依赖 负值给全局的依赖
2. 开始执行依赖的代码。
3. 执行依赖代码中，当出现调用到 Dep 定义的值时，促发 depend 收集依赖
4. 把全局依赖销毁

### getDep 方法 
给值绑Dep类

### reactive 方法 
用来收集多个 要监听的值
#### 原理 
使用 Proxy 来监听每个值的 set 和 get
- set 时 用来监听值被修改 调用 Dep notice
- get 时 用来监听值被调用 调用 Dep depend
和 Dep 的 getvalue , set value 无关
*/