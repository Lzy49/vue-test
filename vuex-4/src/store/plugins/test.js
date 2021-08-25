export default (store) => {
  console.log(
    '%c 你好,我是插件 test 我会在 store 初始化后立即执行',
    'color:green'
  );
  store.subscribe((mutation, state) => {
    console.log(
      '%c 我是 store.subscribe 我会在每次 提交 mutation 时执行',
      'color:purple'
    );
  });
};
