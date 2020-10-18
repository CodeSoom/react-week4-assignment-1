const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  changeTaskTitle: (state, { payload }) => ({
    ...state,
    taskTitle: payload.value,
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
  deleteTask: (state, { payload }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== payload.id),
  }),
};

export default function reducer(state = initialState, action) {
  if (!action || action.type.indexOf('@@') > -1) {
    return state;
  }

  const { type } = action;

  function updateState() {
    return reducers[type](state, action);
  }

  return updateState();
}
