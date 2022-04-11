import { createStore } from 'redux';

// Redux action
// - type (string)
// - payload => object = { taskTitle, ... }

function reducer(state, action) {
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
