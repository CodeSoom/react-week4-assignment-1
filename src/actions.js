export function addTask() {
  return {
    type: 'addTask',
  };
}

export function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: { id },
  };
}

export function updateTaskTitle(title) {
  return {
    type: 'updateTaskTitle',
    payload: { title },
  };
}
