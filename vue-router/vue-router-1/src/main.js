import { createApp } from 'vue';
// import App from './App.vue';
import App from './router-api.vue';
import router from './router-api-test';
const app = createApp(App);
app.use(router);
app.mount('#app');
