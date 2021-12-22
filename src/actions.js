export function updateTitle(event) {
  return {
    type: 'updateTitle',
    payload: {
      taskTitle: event.target.value,
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
