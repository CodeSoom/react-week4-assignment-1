export function addTask() {
  return { type: 'addNewTask' };
}

export function deleteTask(id) {
  return {
    type: 'deleteCompleteTask',
    payload: { id },
  };
}

export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateInput',
    payload: { taskTitle },
  };
}
