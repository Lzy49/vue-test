<template>
<!-- 11 -->
  <div id="app"> 
    <child @click="childClick" msg="child"></child>
    <span @click="setData">现在的number ： {{num}}</span>
    <button @click="getChildData">getChildData</button>
    <computedAndWatch />
    <keep-alive>
      <keepAlive v-if="show == true"></keepAlive>
      <mixinsTest v-else />
    </keep-alive>
    <button @click="setShow"></button>
  </div>
</template>

<script>
import keepAlive from './components/keep-alive'
import computedAndWatch from './components/computed-and-watch'
import child from './components/child'
import mixinsTest from './components/mixins-test'
export default {
  components:{
    child,
    mixinsTest,
    computedAndWatch,
    keepAlive
  },
  name: 'App',
  data(){
    return {
      num : 0,
      show:false
    }
  },
  /* 挂载前执行 */
  beforeCreate(){
    console.log('data',this.data)
    console.log('beforeCreate 阶段 获取不到data 和 props')
  },
  created(){
    console.log('created 阶段 可以访问data 和 props 但虚拟DOM没有创建')
  },
  beforeMount(){
    console.log('beforeMount 阶段 创建虚拟DOM')
  },
  mounted(){
    console.log('mounted 阶段 挂载DOM')
  },
  /* 挂载前执行 end */
  /* 当数据被修改时执行  */
  beforeUpdate(){
    console.log('beforeUpdate 当数据，或者子组件被改变时 挂载DOM前执行',this.num)
  },
  updated(){
    console.log('updated 当数据，或者子组件被改变时 挂载DOM后执行',this.num)
  },
  /* 当数据被修改时执行 end */
  /* 关于 keep-alive 的生命周期 */
  activated(){
    console.log('当页面被缓存后取出时执行')
  },
  deactivated(){
    console.log('当页面被关闭存储时执行')
  },
  /* 关于 keep-alive 的生命周期  end  */
  /* 组件销毁后执行 */
  beforeDestroy(){
    console.log('beforeDestroy 销毁本组件时执行 ，这个时候没有销毁子组件')
  },
  destroyed(){
    console.log('destroyed 销毁所有组件时执行')
  },
  /* 组件销毁后执行 end */
  methods:{
    setShow(){
      this.show = !this.show
    },
    setData(){
      this.num++
    },
    getChildData(){
      /* 通过 this.$children 获得所有子组件*/
      console.log(this.$children[0].msgName = this.num)
    },
    childClick(){
      console.log('childClick')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
