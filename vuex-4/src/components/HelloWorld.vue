<template>
  <div>{{ name }} 今年{{ age }}岁</div>
  <div>{{ fallName }}</div>
  <div>{{ play }}</div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { computed } from 'vue';
export default {
  data() {
    return {};
  },
  computed: {
    // 使用 mapState 生成计算属性
    // 1. 直接传入一个 Array 其中每一个值都是一个`key`
    ...mapState(['name']),
    // 2. 传入一个对象。对象的key对应key，对象的value可以是一个函数或字符，如果是字符串则表示state中的key
    ...mapState({
      age: (state) => (state.name === '张飞' ? 20 : 10)
    }),
    fallName() {
      return this.$store.getters.getFullName('前端');
    },
    ...mapGetters({
      play: 'getName'
    })
  },
  created() {
    this.setName('name')
    console.log('----------- 调用 test/getName ----------')
    console.log(this.$store.getters['test/getName'])
    console.log('----------调用 testlog action ------------')
    this.$store.dispatch('testlog')
    console.log('---------- 调用 test setName -------------')
    this.setTestName();
  },
  methods: {
    ...mapMutations('test',{
      setTestName:'setName'
    }),
    ...mapMutations(['setName'])
  }
};
</script>
