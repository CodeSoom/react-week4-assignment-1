export function addAction() {
  return { type: 'addNewTask' };
}

export function deleteAction(id) {
  return {
    type: 'deleteCompleteTask',
    payload: { id },
  };
}

export function updateAction(taskTitle) {
  return {
    type: 'updateInput',
    payload: { taskTitle },
  };
}
