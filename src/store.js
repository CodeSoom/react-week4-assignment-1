import { createStore } from 'redux';

export const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    return {
      ...state,
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [
        ...state.tasks,
        {
          id: state.newId,
          title: state.taskTitle,
        },
      ],
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
