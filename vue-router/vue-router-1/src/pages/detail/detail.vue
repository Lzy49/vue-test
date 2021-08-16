<template>
  <div>
    this is the {{ $route.params.class }} detail , its id is
    {{ $route.params.id }}
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params);
  },
  mounted() {
    console.log('mounted');
  },
  async beforeRouteUpdate() {
    console.log('路由守卫');
  }
};
</script>
