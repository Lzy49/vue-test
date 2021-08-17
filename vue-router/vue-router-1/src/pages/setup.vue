<template>
  <div>
    this is setup 
  </div>
</template>
<script>

  
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useRouter,
  useRoute,
  useLink,
  RouterLink
} from 'vue-router';
export default {
  props: {
  
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    // router.push('/')
    console.log(route.meta)
    // console.log('喝点', props);
    // console.log(useLink(props));
    onBeforeRouteUpdate((to, from) => {
      console.log('修改了url');
    });
    onBeforeRouteLeave(() => {
      console.log('溜溜溜');
    });
  }
};
</script>
