export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: { taskTitle },
  };
}

export function AddTaskTitle() {
  return {
    type: 'AddTask',
  };
}

export function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: { id },
  };
}
