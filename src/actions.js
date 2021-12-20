// action creator
export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    // ...state, <= 넘겨줄 필요가 없어짐
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
