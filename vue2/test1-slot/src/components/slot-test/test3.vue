<template>
  <div class="body">
    <slot :scope = "data.scope" :test = "data.test" :list = "list"></slot>
  </div>
</template>
<script>
  export default {
    name:'test3',
    data(){
      return {
        data:{
          scope:'子作用域',
          test:'哈哈，就是我！'
        },
        list:['蝙蝠侠','蜘蛛侠','超人','绿巨人']
      }
    }
  }
</script>
<style>
.body{
  background: rgb(254, 195, 195);
}
</style>