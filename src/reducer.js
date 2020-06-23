const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// FIXME:
// initialState 에 대한 테스트케이스 작성
const reducer = (state = initialState, action) => {
  const { newId, taskTitle, tasks } = state;
  switch (action.type) {
  case 'UPDATE_TITLE': {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  case 'ADD_TASK': {
    if (taskTitle.trim() === '') {
      return {
        ...state,
      };
    }
    return {
      ...state,
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: taskTitle }],
      taskTitle: '',
    };
  }
  case 'DELETE_TASK': {
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }
  default: {
    return {
      ...state,
    };
  }
  }
};

export default reducer;
