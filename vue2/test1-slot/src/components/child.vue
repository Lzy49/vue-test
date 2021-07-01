<template>
  <div class="child">
    
   <div style="border:1px solid red; padding:10px;">
     <button @click="getfather()">this.$parent</button>
     <button @click="click"> this.$emit('click')</button>
    </div>
   <child1 @click="getfather" :msg="'child 传递给 child1 的数据'" v-bind="$attrs"  />
  </div>
</template>

<script>
import child1 from './child1'
export default {
  components:{
    child1
  },
  name: 'child',
  data(){
    return {
      msgName :'msg'
    }
  },
  /* 通过 props 获得传递过来的参数 */
  props: {
    msg: String,
  },
  methods:{
    /* 使用  $parent 实例方法 获得参数 */
    getfather(){
      console.log('父级 num ',this.$parent.num)
      this.$parent.childClick()
    },
    click(){
      /* 使用 $emit 调用传递过来的方法 */
      this.$emit('click')
    }
  }
}
</script>