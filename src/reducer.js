const reducer = (state, action) => {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, tasks, taskTitle } = state;

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

  return state;
};

export default reducer;
