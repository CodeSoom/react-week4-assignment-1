import { createStore } from 'redux';

import reducer from './reducer';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const store = createStore(reducer, initialState);

export default store;
