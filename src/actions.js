export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

export function addTask() {
  return {
    type: 'addTask',
  };
}

export function deleteTask(taskId) {
  return {
    type: 'deleteTask',
    payload: {
      id: taskId,
    },
  };
}
