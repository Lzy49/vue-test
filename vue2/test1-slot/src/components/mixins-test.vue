<template>
  <div class="mixins">
    123
  </div>
</template>

<script>
/* 单独混入 */
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
export default {
  mixins: [myMixin],
  name: 'mixins-test',
  data(){
    return {
      
    }
  },
  methods:{
  }
}
</script>