export default () => {
  return {
    name: 'my-test-plugin-2', 
    options() {
      console.log('my-test-plugin-2 options');
    }
  };
};
 