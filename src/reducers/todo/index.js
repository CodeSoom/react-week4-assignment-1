/* eslint-disable arrow-body-style */

export const initialState = {
  tasks: [],
};

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
    };
  }

  return state;
};

export default todoReducer;
