const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// reducer: 상태를 action에 따라 다른 상태로 바꾸어 주는 역할
//          최초의 상태를 가지고 있어야 함

// Redux Action
// - type (string)
// - payload

export default function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

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
