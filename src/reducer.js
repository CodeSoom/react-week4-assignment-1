const initialState = {
  newId: 101,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  const { newId, taskTitle, tasks } = state;

  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    if (!taskTitle) return state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [
        ...tasks,
        { id: newId, title: taskTitle },
      ],
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      tasks: tasks.filter(({ id }) => id !== action.payload.id),
    };
  }

  return state;
};

export default reducer;
