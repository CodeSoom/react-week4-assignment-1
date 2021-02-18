const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  updateTaskTitle: ({ state, action }) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),

  addTask: ({ state }) => {
    if (!state.taskTitle) {
      return state;
    }

    return {
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
    };
  },

  deleteTask: ({ state, action }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== action.payload.id),
  }),
};

export default function reducer(state = initialState, action = { type: '' }) {
  return (
    reducers[action.type]
      ? reducers[action.type]({ state, action })
      : state
  );
}
