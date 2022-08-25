// action creator
export function updateTask(newTask) {
  return {
    type: 'updateTask',
    payload: {
      newTask,
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
