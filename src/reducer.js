const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  updateTaskTitle: (state, { title }) => ({
    ...state,
    taskTitle: title,
  }),
  addTask: (state) => {
    const { newId, taskTitle, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: taskTitle ? [...tasks, { id: newId, title: taskTitle }] : [...tasks],
    };
  },
  deleteTask: (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  }),
};

function reducer(state = initialState, action = { type: 'initialState' }) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}

export default reducer;
