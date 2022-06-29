const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
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
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  return state;
};

export default reducer;
