# 作用
- 该文件是按照 工作时使用组件的一个流程做的 一些练习
- 该文件中的所有例子只使用到 Vue 这一个库
- 该文件用来巩固知识点，贯通知识点。
# 名称
- Vue = Vue;
- app = Vue.createApp({});
- vm = Vue.createApp({}).mount(); // 也就是 组件中的this
# 目录
## 1. createVueApp 
### 创建一个 Vue 应用 
- Vue.createApp(component,{...props})
### Vue 应用 配置
- app.config
#### 关于错误处理
- app.config.errorHandler = function(err,vm,info){} // 捕捉错误
- app.config.errorHandler = function(err,vm,info){} // 捕捉警告
#### 全局 变量，函数
- app.cinfig.globalProperties // 相当于vue proptype 
#### 其他配置
- optionMergeStrategies mixin 自定义 选项合并策略
- performance 开启开发工具
- compilerOptions.isCustomElement 判断 非 DOM，注册组件以外的 节点 以外的节点是不是 自定义节点
- compilerOptions.whitespace 多余空格的处理方式  'condense' | 'preserve'
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