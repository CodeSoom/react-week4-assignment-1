/* eslint-disable arrow-body-style */

export const initialState = {
  tasks: [],
};

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === 'ADD_TASK') {
    const lastId = state.tasks.length > 0 ? state.tasks[state.tasks.length - 1].id : -1;

    return {
      ...state,
      tasks: [...state.tasks, { ...action.payload, id: lastId + 1 }],
    };
  }

  return state;
};

export default todoReducer;
