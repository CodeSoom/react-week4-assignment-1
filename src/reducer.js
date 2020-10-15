const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = {
  updateTaskTitle: (state, { taskTitle }) => ({
    ...state,
    taskTitle,
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
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },
  deleteTask: (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  }),
};

const createAction = (state = initialState, { type, payload }) => {
  if (!reducer[type]) {
    return state;
  }

  return reducer[type](state, payload);
};

export default createAction;
