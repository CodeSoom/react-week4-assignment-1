export const CHANGE_TITLE = 'CHANGE_TITLE';
export const ADD_TASK = 'ADD_TASK';

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

export default {
  changeTitle,
  addTask,
};
