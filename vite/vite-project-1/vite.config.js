import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import test from './vite-plugin-test';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), test]
  // base:'http://oss.lzy49.cn/test/'
});
