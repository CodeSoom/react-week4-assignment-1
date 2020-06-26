import { UPDATE_TASK_TITLE, ADD_TASK, DELETE_TASK } from './action-types';

export function updateTaskTitle(taskTitle) {
  return {
    type: UPDATE_TASK_TITLE,
    payload: { taskTitle },
  };
}

export function addTask() {
  return {
    type: ADD_TASK,
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: { id },
  };
}
