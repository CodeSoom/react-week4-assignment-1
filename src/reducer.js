import ActionType from './action/ActionType';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { newId, taskTitle, tasks } = state;
  const { type, payload } = action;

  if (type === ActionType.UPDATE_TASK) {
    return {
      ...state,
      taskTitle: payload.taskTitle,
    };
  }

  if (type === ActionType.ADD_TASK) {
    return {
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (type === ActionType.DELETE_TASK) {
    return {
      ...state,
      tasks: tasks.filter(({ id }) => id !== payload.id),
    };
  }

  return state;
}
