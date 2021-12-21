export const CHANGE_TODO = (taskTitle) => ({
  type: "CHANGE_TODO",
  payload: { taskTitle },
});

export const ADD_TODO = () => ({
  type: "ADD_TODO",
});

export const DELETE_TODO = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
});
