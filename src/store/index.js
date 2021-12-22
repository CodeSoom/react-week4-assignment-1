import { createStore } from 'redux';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action) {
  const { type } = action;

  if (type === 'addTask') {
    return {
      ...state,
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
    };
  }

  if (type === 'deleteTask') {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  if (type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
