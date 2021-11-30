<template>
  <div>my name is 'setup'</div>
</template>
<script lang="ts" setup>
interface Book {
  title: string;
}
import { ref, reactive } from 'vue';
const num = ref(100);
// num.value = '100 ' // false
const num2 = ref<string | number>(100);
num2.value = '100'; // true
const num3 = ref<any>(100);
num3.value = new Set(); // true
const data = reactive<Book>({
  title: '三国演义'
});

defineExpose({
  log() {
    console.log(123);
  }
});
</script>
