export function updateTaskTitle(taskTitle) {
  return {
    action: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

export function addTask() {
  return {
    action: 'addTask',
  };
}

export function deleteTask(taskId) {
  return {
    action: 'deleteTask',
    payload: {
      id: taskId,
    },
  };
}
