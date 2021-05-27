const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: taskTitle }],
      taskTitle: '',
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
