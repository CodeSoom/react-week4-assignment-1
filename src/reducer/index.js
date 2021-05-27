const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  const { newId, taskTitle, tasks } = state;

  if (type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: payload.taskTitle,
    };
  }

  if (type === 'addTask') {
    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
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
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== payload.id),
    };
  }

  return state;
}
