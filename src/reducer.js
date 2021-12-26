const initialState = {
  newId: 1,
  taskTitle: '',
  tasks: [],
};

const actionTypes = {
  updateTaskTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),
  addTask: (state) => {
    const { tasks, taskTitle, newId } = state;

    if (!taskTitle) {
      return state;
    }

    return ({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  },
  deleteTask: (state, action) => {
    const { tasks } = state;

    return ({
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    });
  },
};

function reducer(state = initialState, action) {
  if (actionTypes[action.type]) {
    return actionTypes[action.type](state, action);
  }
  return state;
}

export default reducer;
