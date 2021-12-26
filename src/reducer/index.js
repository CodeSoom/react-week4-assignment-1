const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const handleReducer = {
  updateTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),
  addTask: (state) => {
    const { newId, taskTitle, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },
  deleteTask: (state, action) => {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  },
};

const reducer = (state = initialState, action) => {
  if (handleReducer[action.type]) {
    return handleReducer[action.type](state, action);
  }

  return state;
};

export default reducer;
