import ActionType from './ActionType';
import toActionObject from './toActionObject';

export function updateTaskTitle(taskTitle) {
  return toActionObject(ActionType.UPDATE_TASK, {
    taskTitle,
  });
}

export function addTask() {
  return toActionObject(ActionType.ADD_TASK);
}

export function deleteTask(id) {
  return toActionObject(ActionType.DELETE_TASK, {
    id,
  });
}
