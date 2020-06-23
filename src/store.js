import { createStore } from 'redux';

const initState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initState, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
