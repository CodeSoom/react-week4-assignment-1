const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { taskTitle, tasks, newId } = state;

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
      taskTitle: '',
      tasks: [...tasks, { id: newId, taskTitle }],
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
