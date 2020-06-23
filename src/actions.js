const updateTitle = (taskTitle) => ({
  type: 'UPDATE_TITLE',
  payload: {
    taskTitle,
  },
});

const addTask = () => ({
  type: 'ADD_TASK',
});

const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id,
  },
});

module.exports = {
  updateTitle,
  addTask,
  deleteTask,
};
