<template>
  <div class="body">
    <header >
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name:"test2"
}
</script>
<style scoped>
.body header{
  background: #0f0;
}
.body main{
  background: red;
}
.body footer{
  background: #00f;
}
</style>