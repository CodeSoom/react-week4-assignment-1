import { UPDATE_TASK_TITLE, ADD_TASK, DELETE_TASK } from './actions';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const actionFunction = {
    [UPDATE_TASK_TITLE]: () => ({
      ...state,
      taskTitle: action.payload.taskTitle,
    }),
    [ADD_TASK]: () => {
      const { newId, taskTitle, tasks } = state;
      if (!taskTitle) {
        return state;
      }
      return {
        ...state,
        newId: newId + 1,
        taskTitle: '',
        tasks: [...tasks, { id: newId, title: taskTitle }],
      };
    },
    [DELETE_TASK]: () => {
      const { tasks } = state;
      return {
        ...state,
        tasks: tasks.filter((task) => task.id !== action.payload.id),
      };
    },
  };

  return actionFunction[action.type] ? actionFunction[action.type](action) : state;
}
