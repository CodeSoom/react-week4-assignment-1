// 리듀서 선언
/* "무슨 일이 일어 났는지"를 설명하는 액션 객체이며 새로운 상태 값을 반환합니다.
 * 감속기의 함수 시그니처는 다음과 같습니다 : (state, action) => newState
*/
const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action.type === 'addTask') {
    const { taskTitle, tasks } = state;
    if (!taskTitle) { // 예외처리 추가 : 입력값이 없을 경우 할일 목록을 처리하지 않음
      return state;
    }

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
