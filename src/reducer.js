export const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const defaultReducer = (state) => state;

const reducers = {
  changeTaskTitle(state, action) {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  },
  addTask(state) {
    const { newId, taskTitle, tasks } = state;

    if (taskTitle === '') {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },
  deleteTask(state, action) {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter(({ id }) => id !== action.payload.id),
    };
  },
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
