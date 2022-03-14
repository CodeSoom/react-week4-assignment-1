export function updateTitle(value) {
  return {
    type: 'updateTitle',
    payload: {
      taskTitle: value,
    },
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
    payload: {
      id,
    },
  };
}
