import { createStore } from 'redux';

const initialState = {
  newId: 3,
  newTask: '',
  tasks: [
    { id: '1', title: '아무것도 하지 않기 #1' },
    { id: '2', title: '아무것도 하지 않기 #2' },
  ],
};

function reducer(state = initialState, action = '') {
  if (action.type === 'updateTask') {
    return {
      ...state,
      newTask: action.payload.newTask,
    };
  }

  if (action.type === 'addTask') {
    const { newId, newTask, tasks } = state;
    return {
      ...state,
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: newTask }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
