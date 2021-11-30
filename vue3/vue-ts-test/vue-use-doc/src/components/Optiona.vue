<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Book {
  title: string;
  count?: number;
  writer: string;
}

export default defineComponent({
  props: {
    book: {
      type: Object as PropType<Book>,
      // 请务必使用箭头函数
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    }
  },
  emits: {
    set(title: string) {
      return title;
    }
  },
  setup(props, context) {
    // console.log(props.book.title.slice); // 可
  },
  methods: {
    setName() {
      // this.$emit('set', 123); // 报错
      this.$emit('set', '绝绝子');
    }
  }
});
</script>
<template>
  <div>
    这是一本《{{ book.title }}》,它有{{ book.count }}页,它的作者是：{{
      book.writer
    }}
  </div>
  <button @click="setName"></button>
</template>
