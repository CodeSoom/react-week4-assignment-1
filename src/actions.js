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

module.exports = {
  addTaskAction,
  changeTaskTitleAction,
};
