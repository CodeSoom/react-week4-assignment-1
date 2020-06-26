const initialState = {
  newId: 1,
  taskTitle: '',
  tasks: [],
};

export default function reudcer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { tasks, newId, taskTitle } = state;

    if (!state.taskTitle) {
      return state;
    }

    return {
      ...state,
      tasks: [...tasks, { id: newId + 1, title: taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter((v) => v.id !== action.payload.id),
    };
  }

  return state;
}
