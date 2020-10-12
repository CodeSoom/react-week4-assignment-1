const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '첫번째 할 일' },
    { id: 2, title: '두번째 할 일' },
  ],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    const { title } = action.payload;

    return {
      ...state,
      taskTitle: title,
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
