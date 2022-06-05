export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

export function addTaskTitle() {
  return {
    type: 'addTaskTitle',
  };
}

export function deleteTaskTitle(id) {
  return {
    type: 'deleteTaskTitle',
    payload: { id },
  };
}
