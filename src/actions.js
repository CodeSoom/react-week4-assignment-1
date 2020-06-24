const addTaskAction = (title) => ({
  type: 'ADD_TASK',
  payload: {
    title,
  },
});

const changeTaskTitleAction = (title) => ({
  type: 'CHANGE_TITLE',
  payload: {
    title,
  },
});

const deleteTaskAction = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id,
  },
});

module.exports = {
  addTaskAction,
  changeTaskTitleAction,
  deleteTaskAction,
};
