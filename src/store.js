import { createStore } from 'redux';

const reducer = () => {
  console.log('Hello, redux');
  return 0;
};

const store = createStore(reducer);

export default store;
