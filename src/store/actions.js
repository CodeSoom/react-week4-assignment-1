export const ACTION_TYPES = {
  CHANGE_TITLE: 'CHANGE_TITLE',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const actions = {
  [ACTION_TYPES.CHANGE_TITLE]: (taskTitle) => ({
    type: ACTION_TYPES.CHANGE_TITLE,
    payload: { taskTitle },
  }),
  [ACTION_TYPES.ADD_TASK]: () => ({
    type: ACTION_TYPES.ADD_TASK,
  }),
  [ACTION_TYPES.DELETE_TASK]: (id) => ({
    type: ACTION_TYPES.DELETE_TASK,
    payload: { id },
  }),
};

export default actions;
