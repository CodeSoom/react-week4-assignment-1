export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask() {
  return { type: ADD_TASK };
}

export function updateTask(taskTitle) {
  return { type: UPDATE_TASK, payload: taskTitle };
}

export function deleteTask(id) {
  return { type: DELETE_TASK, payload: id };
}
