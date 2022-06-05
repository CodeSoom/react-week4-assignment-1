export function updateTitle(title) {
  return {
    type: 'updateTitle',
    payload: { title },
  };
}

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
