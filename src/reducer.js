const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// Redux action
// - type (string)
// - payload => object => { taskTitle }
const updateTaskTitle = (state, action) => ({
  ...state,
  taskTitle: action.payload.taskTitle,
});

const addTaskTitle = (state) => {
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
};

const deleteTaskTitle = (state, action) => {
  const { tasks } = state;

  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== action.payload.id),
  };
};

const actionMethod = {
  updateTaskTitle: (state, action) => updateTaskTitle(state, action),
  addTaskTitle: (state) => addTaskTitle(state),
  deleteTaskTitle: (state, action) => deleteTaskTitle(state, action),
};

const reducer = (state = initialState, action) => {
  if (action.type in actionMethod) {
    return actionMethod[action.type](state, action);
  }

  return state;
};

export default reducer;
