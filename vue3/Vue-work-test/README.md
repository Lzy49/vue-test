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

## 2. component 单组件

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

## 3. wm-property

### property

#### $data

- 获取定义在 component 中的 data 返回值
- setup 返回值不会在该 property 中展示

#### $props

- 获取 通过 props 选项 获取的值

#### $options

- 所有选项集合 包括自定义的 property

#### $el

- 当前组件的根组件

#### $parent

- 父组件实例

#### $root

- 祖根组件实例

#### $slots

- 所有 slot

#### $refs

- 只会收集映射 DOM 的 ref setup 返回的 ref 会被分类

#### $attrs

- 没有被 props , emits 接收的 值

### 方法

#### $watch

- 监听 某值改变执行某方法
- 接收 3 个参数
  - 被监听值 string|function 当多个值可以使用 function 返回一个数组
  - 执行函数 function
  - 其他配置 object
    - deep
    - immediate
    - flush
- 返回一个取消方法 unwatch

#### $emit

- 用来调用 父组件传递来的 自定义事件

#### $forceUpdate

- 强制组件刷新 DOM

#### $nextTick

- 接收一个参数 function 刷新 DOM 后执行的内容

## 4. component 多组件

### 1. 创建组件

#### 1.1 创建同步组件

- `defineComponent`
  - 接收一个 组件对象，并返回一个组件对象。
    - 区别在于使用 `defineComponent` 创建的组件 类型有所改变 用于手动渲染函数、TSX 和 IDE 工具支持。
  - 接收一个 `function` 并返回一个组件对象，该函数和 `setup` 相同

#### 1.2 创建异步组件

- `defineAsyncComponent`
  - 接收一个 `Promise` 成功值为 组件
  - 接收一个 对象 ：
    - `loader` : `function` 抛出一个 `Promise` 成功值为组件
    - `loadingComponent` : `Object` 加载中显示的组件
    - `errorComponent` : `Object` 加载失败显示的组件
    - `delay`: `Number` 在显示 `loadingComponent` 组件之前延迟多少 ms
    - `timeout`: `Number` 并且加载组件的时间超过了设定值，将显示错误组件 默认 `Infinity` (ms)
    - `suspensible`: 组件是否可挂起
    - `onError` 当加载失败后的一个处理函数接收：
      - `error` 错误信息对象
      - `retry` 一个函数，用于指示当 `promise` 加载器 `reject` 时，加载器是否应该重试
      - `fail` 一个函数，指示加载程序结束退出
      - `attempts` 允许的最大重试次数

### 2. 使用组件

#### 2.1 在 render & setup 函数中使用组件

- 直接引入组件，然后将组件渲染到 h 函数中
- 使用组件名调用（全局，组件内都可以）
  - 使用 `resolveComponent` 传入参数一个组件的名称
  - 使用 `resolveDynamicComponent` 传入参数一个组件的名称
  - 两者区别是 `resolveDynamicComponent` 使用的 模版中 component 组件的机制。

#### 2.2 在 template 中使用

- 在 `template` 中使用必须 将组件引入到 `components` 中或全局 `component` 引入 才可以正常使用。
  - 直接组件标签插入
- 使用 <component> 组件 引入动态组件
  - `:is` 拼接一个一个组件名称

### 3. 子组件中插槽的使用

#### 3.1 在 template 中使用插槽

- 直接 使用 `<slot>` 标签在 代码中引用，接收多个参数
  - `name` 表示 `slot` 的名称 与 `v-slot` 的 `:` 后值对应
  - 其他自定义值表示传入参数与 `v-slot` 的 `=` 后值对应

#### 3.2 在 render & setup 中使用 slot

- 在 `render` 和 `setup` 中需要使用 `slots` (`render` 使用 `this.$slots`，`setup` 使用 `context.slots`)
- `slots` 的 每个`key`对应的是 父组件 `v-slot` `:` 后的值
- `slots` 的 每个`value` 都是一个 方法 ，该方法接收一个值，该值对应 `v-slot` `=` 的的值

### 4. 在父组件中使用 slot 钩子

#### 4.1 在 render 函数中使用

- 在 render 函数中使用 钩子 时直接传入一个函数
  - `key` 和 子组件的 `<slot>` `name` 对应
  - 函数接收参数是一个对象 和 子组件传入的所有 自定义 `attr` 对应
  - `return` 一个 VDOM 对象，可以是一个 VDOM 或者 VDOM 数组

#### 4.2 在 template 中使用

- 在`template` 中 直接 插入标签 可以使用 `<template>` `v-slot` 来传递钩子
  - `:`拼接的对应着 组件中的 `<slot>` 的 `name`
  - `=`拼接的对应这 组件中的 `<slot>` 的 其他自定义属性 对象，每一个`key`都是一个自定义属性的 `key`
- 使用 `<component>` 组件 引入动态组件 也 可以使用 `<template>` `v-slot` 来传递钩子
  - `:`拼接的对应着 组件中的 `<slot>` 的 `name`
  - `=`拼接的对应这 组件中的 `<slot>` 的 其他自定义属性 对象，每一个`key`都是一个自定义属性的 `key`
  - 要注意的如果有两个组件接收了相同的 `slot` 会造成 传入 `slot` 相同的问题

### 5. 在子组件使用父组件传递的参数 和 自定义函数

- 自定义参数必须在 `props` 选项中接收才可以正常使用 不管是那种方案。
- 自定义函数必须在 `emits` 选项中接收才可以使用 不管是那种方案。

#### 5.1 在 template 模版中使用自定义事件和自定义参数

- 参数像`data`一样可以正常使用
- 事件则需要使用 `$emit` 来调用 该函数接收两个值 函数名，参数集合
- 没有被接收的的内容会在 实例 的`$attrs` 中显示

#### 5.2 在 render & setup 函数中使用

- 父组件中传入的 `props` 在 `setup` 的 `props` 中显示 ，在 `render` 函数的 `wm` 实例上解构
- 没有被 `props` 和 `emits` 接收的参数都会在 `context` 的 `attrs` 中显示

### 6 传递自定义属性和自定义方法

#### 6.1 在 render 函数中使用

- 传递自定义 `props` 时 直接在 h 的第二函数中设置即可
- 传递自定义 函数时 时 需要在函数前添加 `on` 并使用驼峰写法 `onXxxxx` 来拼接，最后如果有修饰符也可以使用驼峰拼接

#### 6.2 在 template 中使用

- 在 template 中添加 自定义参，自定义方法，需要使用全小写 `-` 拼接驼峰字段，
- 在自定义事件需要使用修饰符时使用 `.` 字符拼接

### 7 子组件使用 `v-model`

#### 7.1 在 template 模版中使用 v-mobel 值

- 和调用其他值相同，在模版改变的函数中 调用`update:xxx`，在显示的位置使用 xxx

#### 7.2 在 render & setup 函数中使用 v-model

- 和调用其他值相同，在模版改变的函数中 调用`update:xxx`，在显示的位置使用 xxx

### 8 在父组件传递 `v-model`

#### 8.1 render 函数中 给 组件 使用 v-model 传递值

- 可以将其语法糖拆解为 xxx 值，和 onUpdate:xxx 函数 通过 `h` 的第二参数传递

#### 8.2 在 template 中使用

- 在 `template` 中 给 组件传递 `v-model` 直接使用 `v-model` 指令就可以实现

## 5. 模版渲染
