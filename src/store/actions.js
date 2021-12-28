export const ACTION_TYPES = {
  CHANGE_TITLE: 'CHANGE_TITLE',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

export const changeTitle = (taskTitle) => ({
  type: ACTION_TYPES.CHANGE_TITLE,
  payload: { taskTitle },
});

export const addTask = () => ({
  type: ACTION_TYPES.ADD_TASK,
});

export const deleteTask = (id) => ({
  type: ACTION_TYPES.DELETE_TASK,
  payload: { id },
});
