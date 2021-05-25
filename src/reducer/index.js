export default function reducer(state, action) {
  const { type, payload } = action;

  if (type === 'updateTaskTitle') {
    const { taskTitle } = payload;

    return {
      ...state,
      taskTitle,
    };
  }

  if (type === 'addTask') {
    const { newId, taskTitle, tasks } = payload;

    if (!taskTitle) {
      return { ...state };
    }

    return {
      ...state,
      newId,
      taskTitle: '',
      tasks: [
        ...tasks,
        {
          id: newId,
          title: taskTitle,
        },
      ],
    };
  }

  if (type === 'deleteTask') {
    const { tasks } = state;
    const { id } = payload;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    };
  }

  return { ...state };
}
