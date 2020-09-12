module.exports = {
  changeTitleAction: (title) => ({
    type: 'CHANGE_TITLE',
    payload: {
      title,
    },
  }),

  addTaskAction: () => ({
    type: 'ADD_TASK',
  }),

  deleteTaskAction: (id) => ({
    type: 'DELETE_TASK',
    payload: { id },
  }),
};
