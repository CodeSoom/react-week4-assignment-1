const initialState = {
  newId: 0,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { newId, taskTitle, tasks } = state;
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action.type === 'addTask') {
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
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
