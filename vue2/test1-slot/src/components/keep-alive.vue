<template>
  <div style="margin-top:20px;border:1px solid blue; padding:10px">
    <ul>
      <li v-for ="item in list" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'keep-alive',
  data(){
    return{
      list:[
        'item1','item2','item3','item4','item5','item6'
      ]
    }
  },
  /* 关于 keep-alive 的生命周期 */
  activated(){
    console.log('%C当页面被缓存后取出时执行','color:red')
  },
  deactivated(){
    console.log('当页面被关闭存储时执行','color:red')
  },
  /* 关于 keep-alive 的生命周期  end  */
  methods:{
    
  }
}
</script>