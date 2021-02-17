import { creatSotre } from 'redux';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '아무것도 하지 않기 #1' },
    { id: 2, title: '아무것도 하지 않기 #2' },
  ],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTItle') {
    return {
      ...state,
      taskTitle: action.payload.taskTItle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTItle: '',
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
}

const store = creatSotre(reducer);

export default store;
