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

    return {
      ...state,
      newId,
      taskTitle,
      tasks: [
        ...tasks,
        {
          id: newId,
          title: taskTitle,
        },
      ],
    };
  }

  return { ...state };
}
