export function changeTitle(title) {
  return {
    type: 'changeTitle',
    payload: title,
  };
}

export function addTask(taskTitle) {
  return {
    type: 'addTask',
    payload: taskTitle,
  };
}

export function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: id,
  };
}
