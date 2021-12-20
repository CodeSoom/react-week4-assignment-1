import { ACTION_TYPES } from './actions';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reudcer = (state = initialState, action) => {
  const { newId, taskTitle, tasks } = state;
  const { type, payload } = action;
  if (type === ACTION_TYPES.CHANGE_TITLE) {
    return {
      ...payload,
      taskTitle: payload.taskTitle,
    };
  }
  if (type === ACTION_TYPES.ADD_TASK) {
    return {
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (type === ACTION_TYPES.DELETE_TASK) {
    return {
      ...state,
      tasks: tasks.filter(({ id }) => id !== payload.id),
    };
  }

  return state;
};

export default reudcer;
