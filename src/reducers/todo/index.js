/* eslint-disable arrow-body-style */

export const initialState = {
  lastId: -1,
  tasks: [],
};

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === 'ADD_TASK') {
    const nextId = state.lastId + 1;
    const newTask = { ...action.payload, id: nextId };

    return {
      ...state,
      lastId: nextId,
      tasks: [...state.tasks, newTask],
    };
  }

  if (action.type === 'COMPLETE_TASK') {
    const foundIndex = state.tasks.findIndex((task) => task.id === action.payload.id);

    if (foundIndex > -1) {
      const nextTasks = [...state.tasks];
      nextTasks.splice(foundIndex, 1);

      return {
        ...state,
        tasks: nextTasks,
      };
    }
  }

  return state;
};

export default todoReducer;
