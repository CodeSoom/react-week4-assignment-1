import { createStore } from 'redux';
// 어떻게 그릴지 신경쓰지 않아도 됨

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// Redux Action
// - type (string)
// - payload

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle,
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
// reducer: 상태를 action에 따라 다른 상태로 바꾸어 주는 역할
//          최초의 상태를 가지고 있어야 함
export default store;
