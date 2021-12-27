export function changeTaskTitle(taskTitle) {
  return {
    type: 'changeTaskTitle',
    payload: {
      taskTitle,
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
