import { createAction } from 'redux-actions';

const UPDATE_TASK_TITLE = 'task/UPDATE_TASK_TITLE';
const ADD_TASK = 'task/ADD_TASK';
const DELETE_TASK = 'task/DELETE_TASK';

export const updateTaskTitle = createAction(UPDATE_TASK_TITLE);
export const addTask = createAction(ADD_TASK);
export const deleteTask = createAction(DELETE_TASK);

// export const setDiff = diff => ({ type: SET_DIFF, diff });
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// function updateTaskTitle(taskTitle) {
//   return {
//     type: 'UPDATE_TASK_TITLE',
//     payload: { taskTitle },
//   };
// }

// export function addTask() {
//   return {
//     type: 'ADD_TASK',
//   };
// }

// export function deleteTask(id) {
//   return {
//     type: 'DELETE_TASK',
//     payload: { id },
//   };
// }
