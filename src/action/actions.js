import ActionType from './ActionType';
import ActionItem from './ActionItem';

export function updateTaskTitle(state, taskTitle) {
  return new ActionItem(ActionType.UPDATE_TASK, {
    taskTitle,
  });
}

export function addTask() {
  return new ActionItem(ActionType.ADD_TASK);
}

export function deleteTask(id) {
  return new ActionItem(ActionType.DELETE_TASK, {
    id,
  });
}
