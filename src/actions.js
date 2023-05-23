const updateTaskTitle = (taskTitle) => ({
  type: 'updateTaskTitle',
  payload: {
    taskTitle,
  },
});

const addTask = () => ({
  type: 'addTask',
});

const deleteTask = (id) => ({
  type: 'deleteTask',
  payload: {
    id,
  },
});

export { updateTaskTitle, addTask, deleteTask };
