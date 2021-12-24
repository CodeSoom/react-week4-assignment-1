export const ACTION_TYPES = {
  UPDATE_TITLE: 'updateTaskTitle',
  ADD_TASK: 'addTask',
  DELETE_TASK: 'deleteTask',
};

export function updateTaskTitle(taskTitle) {
  return {
    type: ACTION_TYPES.UPDATE_TITLE,
    payload: {
      taskTitle,
    },
  };
}

export function addTask() {
  return {
    type: ACTION_TYPES.ADD_TASK,
  };
}

export function deleteTask(id) {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    payload: {
      id,
    },
  };
}
