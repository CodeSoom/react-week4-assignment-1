import { createStore } from 'redux';

// Redux 의; aciton
// -type (Stirng)
// -- taskTitle.... or payload => object => {tasktitle}

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTile: action.payload.taskTile,
    };
  }
  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;
    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
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
