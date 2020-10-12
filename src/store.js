import { createStore } from 'redux';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '첫번째 할 일' },
    { id: 2, title: '두번째 할 일' },
  ],
};

function reducer() {
  return initialState;
}

const store = createStore(reducer);

export default store;
