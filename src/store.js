import { createStore } from 'redux';

// Redux action
// - type   : String)
// - payload: Object

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// 상태에 대한 관심사 분리
// 새로운 상태를 리턴하는 reducer() 생성
function reducer(state = initialState, action) {
  if (action === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action === 'addTask') {
    const { newId, taskTitle, tasks } = state;
    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }
  if (action === 'deleteTask') {
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
