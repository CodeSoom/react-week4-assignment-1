import { createStore } from 'redux';

function reducer() {
  return {
    newId: 100,
    taskTitle: '',
    tasks: [],
  };
}

const store = createStore(reducer);

export default store;
