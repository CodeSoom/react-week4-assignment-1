const updateTaskTitle = (taskTitle = '') => ({
  type: 'updateTaskTitle',
  payload: {
    taskTitle,
  },
});

const addTask = () => ({
  type: 'addTask',
});

export {
  updateTaskTitle,
  addTask,
};
