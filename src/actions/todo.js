export const TYPE_ADD_TASK = 'ADD_TASK';
export const addTask = (title) => ({
  type: TYPE_ADD_TASK,
  payload: {
    title,
  },
});

export const TYPE_COMPLETE_TASK = 'COMPLETE_TASK';
export const completeTask = (id) => ({
  type: TYPE_COMPLETE_TASK,
  payload: {
    id,
  },
});
