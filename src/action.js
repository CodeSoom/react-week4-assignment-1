export function updateTaskTitle(todoTitle) {
  return {
    type: 'updateTodoTitle',
    payload: {
      todoTitle,
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
