export default {
  name: 'my-test-plugin',
  options() {
    console.log('my-test-plugin options');
  },
  buildStart() {
    console.log('my-test-plugin bind');
  },
  load() {
    console.log('my-test-plugin load');
  },
  buildEnd() {
    console.log('my-test-plugin end');
  },
  closeBundle() {
    console.log('my-test-plugin close');
  },
  config(config, { command }) { 
    // 配置 config
    if (command === 'dev') {
      config.root = '/';
    }
    console.log('config, command');
  },
  configResolved(config) {
    // 最后解析
    console.log('configResolved', 'config');
  },
  configureServer(server) {
    // 开发服务器的钩子 异步钩子
    console.log('configureServer');
    // server.middlewares.use((req, res, next) => {});
  },
  transformIndexHtml(html) {
    // 处理文本
    console.log(html)
    return `<div>你好</div>`
  },
  handleHotUpdate(ctx){
    // HMR
    console.log('HMR')
  }
};
