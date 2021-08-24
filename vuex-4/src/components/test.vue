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
  },
  computed: {
    ...mapGetters({ name: 'getName' })
  }
};
</script>
