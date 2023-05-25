import { handleActions, createAction } from 'redux-actions';

const UPDATE_TASK_TITLE = 'task/UPDATE_TASK_TITLE';
const ADD_TASK = 'task/ADD_TASK';
const DELETE_TASK = 'task/DELETE_TASK';

export const updateTaskTitle = createAction(UPDATE_TASK_TITLE);
export const addTask = createAction(ADD_TASK);
export const deleteTask = createAction(DELETE_TASK);

const initialState = { newId: 100, taskTitle: '', tasks: [] };

const reducer = handleActions({
  [UPDATE_TASK_TITLE]: (state, { payload }) => ({
    ...state,
    taskTitle: payload.taskTitle,
  }),
  [ADD_TASK]: (state) => {
    const { newId, tasks, taskTitle } = state;
    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },
  [DELETE_TASK]: (state, { payload }) => {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== payload.id),
    };
  },
}, initialState);

export default reducer;
