export const CHANGE_TITLE = 'CHANGE_TITLE';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

function changeTitle(value) {
  return {
    type: CHANGE_TITLE,
    payload: value,
  };
}

function addTask() {
  return {
    type: ADD_TASK,
  };
}

function removeTask(id) {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
}

export default {
  changeTitle,
  addTask,
  removeTask,
};
