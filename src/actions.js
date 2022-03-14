// 기존: 상태를 바꿔줌 -> action creator
export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
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
