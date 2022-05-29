const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const handleUpdateTaskTitle = (state, action) => ({
  ...state,
  taskTitle: action.payload.taskTitle,
});

const handleAddTask = (state) => {
  const { taskTitle, newId, tasks } = state;

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

const handleDeleteTask = (state, action) => (
  {
    ...state,
    tasks: state.tasks.filter((task) => task.id !== action.payload.id),
  }
);

const reducers = {
  updateTaskTitle: (state, action) => handleUpdateTaskTitle(state, action),
  addTask: (state) => handleAddTask(state),
  deleteTask: (state, action) => handleDeleteTask(state, action),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
