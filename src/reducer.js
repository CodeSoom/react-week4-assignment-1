const initialState = {
  newId: 101,
  taskTitle: '',
  tasks: [],
};

const actionHandlers = {
  updateTaskTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),
  addTask: (state) => {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [
        ...tasks,
        { id: newId, title: taskTitle },
      ],
    };
  },
  deleteTask: (state, action) => ({
    ...state,
    tasks: state.tasks.filter(({ id }) => id !== action.payload.id),
  }),
};

const reducer = (state = initialState, action) => {
  if (actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action);
  }

  return state;
};

export default reducer;
