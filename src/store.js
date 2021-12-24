import { createStore } from 'redux';

export function reducer(state, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
