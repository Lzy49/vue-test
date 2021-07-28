# 作用

- 该文件是按照 工作时使用组件的一个流程做的 一些练习
- 该文件中的所有例子只使用到 Vue 这一个库
- 该文件用来巩固知识点，贯通知识点。

# 名称

- Vue = Vue;
- app = Vue.createApp({});
- vm = Vue.createApp({}).mount(); // 也就是 组件中的 this

# 目录

## 1. createVueApp

- 关于 创建 Vue 应用的配置

### 创建一个 Vue 应用

- Vue.createApp(component,{...props})

### Vue 应用 配置

- app.config

#### 关于错误处理

- app.config.errorHandler = function(err,vm,info){} // 捕捉错误
- app.config.errorHandler = function(err,vm,info){} // 捕捉警告

#### 全局 变量，函数

- app.cinfig.globalProperties // 相当于 vue proptype

#### 其他配置

- optionMergeStrategies mixin 自定义 选项合并策略
- performance 开启开发工具
- compilerOptions.isCustomElement 判断 非 DOM，注册组件以外的 节点 以外的节点是不是 自定义节点
- compilerOptions.whitespace 多余空格的处理方式 'condense' | 'preserve'
- compilerOptions.delimiters 修改 html 中 变量 风格
- compilerOptions.comments 移除注释

### 全局 混入

- app.mixin(component) // 混入一个组件（该组件的生命周期会在 组件前执行，该组件的属性会被组件属性覆盖）

### 全局 组件 引入

- app.component
  - object 同步组件
  - defineAsyncComponent 异步组件

### 全局 指令 设置

- app.directive('tag',option)

### 全局 store

- app.provide('key',value)

### 插件使用

- app.use(function | object , options)

### Vue 应用 挂载 到 DOM

- app.mount(DOM)

### 卸载应用

- app.unmount()

## 2.component

- 关于组件的一些选项。

### 数据

#### data

- data 函数 抛出所有响应值 该函数必须是一个 函数 并抛除一个对象，对象中的所有值都是 响应值
  - 如果函数是一个箭头函数，则会接收一个参数 vm 该参数是 this
  - 如果函数是一个 function 不会接收任何值，this == Vue 实例

#### props

- props 接收 一个 对象 或 数组 ，接收的值是父组件传入参数。
  - 当 props 是 数组时，则每个值就是 父组件传入的参数的 key
    - 当 props 是 对象时，贼每个值的 key 是 父组件传入的参数的 key。对应的值可以是一个 options 对象，或一个 Class
      - 如果是 Class 表示 验证传入值是否是 该 Class 的实例
      - 如果是 option 对象时，可以接收多个内容
        - type 接收 一个 Class， 验证传入值是否时 该 Class 的实例
        - default 没有接收到值时的默认值
        - required 是否必填接收一个 Boolean 默认 false
        - validator 自定义校验函数 返回一个 Boolean 值 接收 一个参数
          - 传入值

#### computed

- computed 接收一个 对象，没一个 值 都会创建为一个响应值。该值接收两种内容
  - 接收一个 函数，该函数 必须 返回 一个 值，该值可以依赖 其他 响应值，当这些响应值发生改变时。这个值也会进行变化
  - 接收一个 对象，该对象有两个值
    - get: 和 只接收一个函数时相同 。
    - set: 该值接收一个函数，函数接收一个值。可以在函数中对 该响应值的依赖进行修改。
- 计算属性 和 直接调用一个函数差不多。但是 计算属性 有缓存机制。如果多处调用，可以降低性能消耗。

#### methods

- methods 方法集
  - 该集合 接收 一个对象，对象中的每一个值都是一个函数，这些函数会绑定到 this 实例上。可以在模版中调用。
  - methods 中的函数 在未传值时接收一个 event 值，与 javascript 的事件 event 相同

#### watch

- watch 接收 一个对象，对象中的每一个 值 的 key 是一个值，当该值发生变化时，执行对应的 handler 函数。
- watch 的每个值 可以是一个 函数 或者 一个对象
  - 当值是函数时，表示 当 Key 发生变化时， 执行该函数
  - 当值是一个对象时，可以接收多个参数：
    - handler : function 表示 当 Key 发生改变后 执行该函数，该函数接收一个值 检测值
    - immediate : 表示 在 key 初始化后 执行一次 handler 函数
    - deep : 表示深度检测 key 指向 的值
    - flush: 表示更新时机
      - pre 当 watch 值 之前更新
      - post 当 watch 值 之后更新
      - sync 与 watch 值 同步更新

#### emits

- 当接收一个数组时，每一个值都是一个 父组件传递来的自定义方法
- 当接收一个对象时，每一个值的 key 是一个父组件传递来的自定义方法。值的 value 是一个函数，该函数的作用是校验 调用时传入参数是否合法。
  该函数会在 通过 emit 调用 指定的自定义方法之前执行 接收 emit 的第二个参数，并必须返回一个 Boolean 值。如果 Boolean 为 false 则 会报错

### DOM

#### template

- template 接收一个字符串，这个字符串是一端 HTML Vue 指令的字符

#### render

- render 接收一个函数，该函数必须返回一个 VDOM 或者 JSX

### 生命周期

#### 基础生命周期

- beforeCreate // 实例初始化之前调用
- created // 实例初始化后
- beforeMount // render 函数首次调用 之前
- mounted // render 函数首次调用 之后
- beforUpdate // 更新 DOM 前
- updated // 更新 DOM 后
- beforeUnmount // 卸载以前
- unmounted // 卸载后

#### keep-alive 相关的生命周期

- activated keep-alive 缓存的组件激活时调用
- deactivated 被 keep-alive 缓存的组件停用时调用。

#### 调试使用的 生命周期

- errorCaptured 当捕获一个来自子孙组件的错误时被调用。
  - 接收 3 个 参数
    - 错误对象、
    - 发生错误的组件实例
    - 包含错误来源信息的字符串
  - 此钩子可以返回 false 以阻止该错误继续向上传播。
- renderTracked 跟踪虚拟 DOM 重新渲染时调用。钩子接收 debugger event 作为参数。此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
- renderTriggered 当虚拟 DOM 重新渲染被触发时调用。和 renderTracked 类似，接收 debugger event 作为参数。此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。

### 选项/资源

#### directives

- 局部指令 只能在当前 组件使用，子组件和父组件都不可以

#### components

- 声明组件实例中可用组件的哈希表。

### 组合

#### mixins

- mixins 接收一个数组，混入 多个组件

#### extends

- extends 接收一个对象或者一个构造函数，用来扩展 组件

#### provide / inject

##### provide

- provide 接收一个函数，该函数抛出一个对象，该对象中的值都可以被子组件 or 孙组件 inject 引入

##### inject

- inject 接收 provide 提供的值

### 杂项

#### name

- 组件 名称 ，与 keep-alive 相关， keep-alive
- 可以自己调用自己

#### inheritAttrs

- 表示 是否 接收 propes 以外的 attrs 写到 root DOM 上 默认 true

#### compilerOptions

- 接收 一个 Array 修改 html 中的 vue 模版
