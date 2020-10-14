export const UPDATE_TASK_TITLE = 'updateTaskTitle';
export const ADD_TASK = 'addTask';
export const DELETE_TASK = 'deleteTask';

export const updateTaskTitle = (taskTitle) => ({
  type: UPDATE_TASK_TITLE,
  payload: {
    taskTitle,
  },
});

export const addTask = () => ({
  type: ADD_TASK,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});
