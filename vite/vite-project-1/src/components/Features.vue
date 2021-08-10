<template>
  <div class="featuresBox">
    <p :class="classNames">你好</p>
  </div>
</template>
<script setup></script>
<style lang="scss">
.featuresBox {
  width: 100px;
  height: 100px;
  background: red;
  > p {
    color: #fff;
  }
}
</style>
