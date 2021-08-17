<template>
  <div>
    this is the {{ $route.params.class }} detail , its id is
    {{ $route.params.id }}
  </div>
</template>
<script>
export default {
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('%c --------------------------------','color:yellow')
    console.log(this.$route.params,this.$route.meta);
    console.log('%c --------------------------------','color:yellow')
  },
  mounted() {
    console.log('mounted');
  },
  beforeRouteEnter(to, from, next) {
    console.log('%c beforeRouteEach 这里无法访问this','color:yellow');
    next((vm) => {
      console.log('this',vm);
    });
  },
  beforeRouteUpdate() {
    console.log('%c beforeRouteUpdate','color:yellow')
    console.log('beforeRouteUpdate ', this);
  },
  beforeRouteLeave(){
    console.log('%c beforeRouteLeave','color:yellow')
  }
};
</script>
