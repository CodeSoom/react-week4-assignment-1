const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const actions = {
  updateTaskTitle: (state, action) => ({ ...state, taskTitle: action.payload.taskTitle }),
  addTask: (state) => {
    if (!state.taskTitle) return state;

    return {
      ...state,
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
    };
  },
  deleteTask: (state, action) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== action.payload.id),
  }),
};

const defaultAction = (state) => state;

export default function reducer(state = initialState, action) {
  return (actions[action.type] || defaultAction)(state, action);
}
