<template>
  <div style="margin-top:20px;border:1px solid green; padding:10px">
    <!-- 通过 $attrs 获得 没有被props 接收的参数 -->
    <button @click="listenersClick"> child1 ：{{$attrs.msg}}</button>
  </div>
</template>

<script>
export default {
  name: 'child1',
  data(){
    return{

    }
  },
  methods:{
    listenersClick(){
      /* 通过 listeners 调用 传递过来的方法 */
      this.$listeners.click()
    }
  }
}
</script>