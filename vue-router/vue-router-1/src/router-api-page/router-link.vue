<template>
  <div>
    <router-link
      to="/router-link"
      replace
      :active-class="'a'"
      :aria-current="'time'"
      :exact-active-class="'b'"
    >
      <span>你好</span>
    </router-link>
    <router-link to="/" custom>
      <a style="width: 10px; height: 10px; background: red; display: block">
      </a>
    </router-link>
  </div>
</template>
<style>
.a {
  color: red;
}
.b {
  color: yellow;
}
</style>
