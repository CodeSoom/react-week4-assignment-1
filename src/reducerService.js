export const updateTaskTitle = (state, action) => ({
  ...state,
  taskTitle: action.payload.taskTitle,
});

export const addTask = (state) => {
  if (!state.taskTitle) {
    return state;
  }
  return {
    ...state,
    newId: state.newId + 1,
    taskTitle: '',
    tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
  };
};

export const deleteTask = (state, action) => ({
  ...state,
  tasks: state.tasks.filter((task) => task.id !== action.payload.id),
});
