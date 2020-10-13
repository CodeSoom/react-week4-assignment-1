import { createStore } from 'redux';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTtitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: action.payload.newId, title: action.payload.taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;

    return {
      type: 'deleteTask',
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
