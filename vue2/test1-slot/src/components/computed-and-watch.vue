<template>
  <div style="margin-top:20px;border:1px solid green; padding:10px">
    <button @click="setAge">{{sayMyinfo}}</button>
    <input v-model="setName" />
    {{name + age +msg}}
  </div>
</template>

<script>
export default {
  name: 'computedAndWatch',
  data(){
    return{
      name:'张三',
      age:19,
      msg:'',
      setMsg:'msg:'
    }
  },
  methods:{
    setAge(){
      this.age++
      this.setMsg = 'msg:' + this.age
    }
  },
  computed:{
    sayMyinfo:function(){
      return this.age
    },
    setName:{
      get(){
        return this.name + '先生'
      },
      set(v){
        console.log(v)
      }
    }
  },
  watch:{
    setMsg:function(val){
      this.msg = val
    }
  }
}
</script>