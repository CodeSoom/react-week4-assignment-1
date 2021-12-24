import { identity } from '../lib';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const ADD_TASK = 'addTask';
const DELETE_TASK = 'deleteTask';
const UPDATE_TASK_TITLE = 'updateTaskTitle';

const reducers = {
  [ADD_TASK]: (state) => {
    if (!state.taskTitle) {
      return state;
    }
    return {
      ...state,
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
    };
  },
  [DELETE_TASK]: (state, action) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== action.payload.id),
  }),
  [UPDATE_TASK_TITLE]: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  return (reducers[type] || identity)(state, action);
}
