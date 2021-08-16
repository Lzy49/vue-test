<template>this is 404</template>
<script>
export default {
  created(){
    console.log(this.$route.params.pathMatch)
  }
}
</script>