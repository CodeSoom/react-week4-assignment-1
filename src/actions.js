export function updateTaskTitle(taskTitle) {
  return ({
    type: 'updateTaskTitle',
    payload: { taskTitle },
  });
}

export function addTask() {
  return ({
    type: 'updateTaskTitle',
  });
}

export function deleteTask(id) {
  return ({
    type: 'updateTaskTitle',
    payload: { id },
  });
}
