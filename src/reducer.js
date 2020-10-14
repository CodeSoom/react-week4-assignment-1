const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action = { type: 'initialState' }) {
  const taskTitle = action.payload ? action.payload.title : '';
  const actions = {
    updateTaskTitle: { taskTitle },
  };

  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
     ...actions[action.type],
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) return state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;
    const { id } = action.payload;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    };
  }
  return state;
}

export default reducer;
