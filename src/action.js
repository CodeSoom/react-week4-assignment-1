export function changeTitle(taskTitle) {
  return {
    type: 'changeTitle',
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
