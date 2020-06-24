const addTaskAction = () => ({
  type: 'ADD_TASK',
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
