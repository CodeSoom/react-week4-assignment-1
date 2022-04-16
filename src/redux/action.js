export function updateTaskTitle(taskTitle) {
  return {
    type: 'CHANGE_TITLE',
    payload: {
      taskTitle,
    },
  };
}

export function addTask() {
  return {
    type: 'ADD_TASK',
  };
}

export function deleteTask({ id }) {
  return {
    type: 'DELETE_TASK',
    payload: {
      id,
    },
  };
}
