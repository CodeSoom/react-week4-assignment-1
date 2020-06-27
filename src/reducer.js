const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const updateTaskTitle = (state, action) => ({
  ...state,
  taskTitle: action.payload.taskTitle,
});

const addTask = (state) => {
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

const deleteTask = (state, action) => {
  const { tasks } = state;

  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== action.payload.id),
  };
};

const handleAction = {
  updateTaskTitle,
  addTask,
  deleteTask,
};

export default function reducer(state = initialState, action) {
  return handleAction[action.type] ? handleAction[action.type](state, action) : state;
}
