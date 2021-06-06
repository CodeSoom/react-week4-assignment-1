import { createStore } from 'redux';
// store 선언하기. 스토어 생성시 스토어에서 저장된 데이터를 다룰 리듀서가 필요함.

// 리듀서 선언
/* "무슨 일이 일어 났는지"를 설명하는 액션 객체이며 새로운 상태 값을 반환합니다.
 * 감속기의 함수 시그니처는 다음과 같습니다 : (state, action) => newState
*/
const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action.type === 'addTask') {
    const { taskTitle, tasks } = state;
    const newId = state.newId + 1;
    return {
      ...state,
      newId,
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

// 앱 상태를 보관하는 Redux 스토어를 만듭니다.
// API는 {subscribe, dispatch, getState}입니다.
const store = createStore(reducer);
export default store;
