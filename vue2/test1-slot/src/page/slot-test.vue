<template>
  <div class="main">
    <div>
      test1 默认值 和 传一个slot 演示
      <test1>非默认</test1>
      <test1>
        <!-- 注释不影响默认值 且不会被渲染 -->
      </test1>
    </div>
    <div>
      test2  多 slot 演示
      <test2>
        <templat slot="header">header</templat>
        <template >body</template>
        <template v-slot:footer>footer</template>
        <template slot="default">body-2</template>
      </test2>
    </div>
    <div>
      test3 作用域问题 演示
      <test3>
        <template>{{data}}</template>
      </test3>
      test3 使用 子作用域数据
      <test3 >
        <template v-slot:default="slotProps">
          {{slotProps.scope}},{{slotProps.test}}
        </template>
      </test3>
      test3 使用 单一默认卡槽 获取子作用域数据
      <test3 v-slot="slotProps">
        {{slotProps.scope}} {{slotProps.test}}
      </test3>
      test3 插槽数据解构
      <test3 v-slot="{scope,test,list : childList} = slotProps">
        {{scope}} {{test}}
        {{childList}}
      </test3>
      test1 插槽默认数据
      <test1 v-slot="{slotProps = {scope:'我其实是默认值的slotProps',test:'我其实是默认值的test'}}">
        {{slotProps.scope}} {{slotProps.test}}
      </test1>
      
    </div>
  </div>
</template>
<script>
import test1 from '@/components/slot-test/test1'
import test2 from '@/components/slot-test/test2'
import test3 from '@/components/slot-test/test3'
export default {
  data(){
    return {
      data:'page-data',
      slotName:'childProps'
    }
  },
  components:{
    test1,
    test2,
    test3
  },
  mounted(){
    console.log(this.slotName)
  }
}
</script>
<style scoped>
.main > div{
  border-bottom: 1px solid #000;
  padding: 10px 0;
}
</style>
