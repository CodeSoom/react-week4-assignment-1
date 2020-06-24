const addTaskAction = (title) => {
  return {
    type: 'ADD_TASK',
    payload: {
      title,
    },
  };
};

module.exports = {
  addTaskAction,
};
