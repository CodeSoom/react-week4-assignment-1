export function changeTaskTitle(value) {
  return {
    type: 'changeTaskTitle',
    payload: {
      value,
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
