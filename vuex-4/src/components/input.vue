<template>
  <input v-model="inputValue" />
  <button @click="$store.dispatch('test')"></button>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const props = defineProps({
  inputKey: String
});
const store = useStore();
const inputValue = computed({
  get() {
    return store.state[props.inputKey];
  },
  set(value) {
    store.commit('set', {
      key: props.inputKey,
      value
    });
  }
});
</script>
