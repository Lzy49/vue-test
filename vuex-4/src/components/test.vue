<template>
  <div>{{ name }}</div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
const { mapMutations, mapActions, mapGetters } =
  createNamespacedHelpers('test');
export default {
  methods: {
    ...mapMutations(['setName']),
    ...mapActions({
      asyncSetName: 'setName'
    })
  },
  created() {
    this.setName('刘备');
    this.asyncSetName();
    this.$store.watch((state)=>{
      return state.name
    },()=>{
      console.log('%c watch ','color:azure')
    })
  },
  computed: {
    ...mapGetters({ name: 'getName' })
  }
};
</script>
