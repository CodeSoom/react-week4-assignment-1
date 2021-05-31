export function updateTaskTitle(taskTitle) {
  return {
    type: 'todos/updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

export function addTask() {
  return {
    type: 'todos/addTask',
  };
}

export function deleteTask(id) {
  return {
    type: 'todos/deleteTask',
    payload: {
      id,
    },
  };
}
