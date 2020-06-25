export function changeTitle(taskTitle) {
  return {
    type: 'changeTitle',
    payload: {
      taskTitle: '새로운 할 일',
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
      id: 1,
    },
  };
}
