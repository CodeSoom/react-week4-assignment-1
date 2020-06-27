// Redux Action
// - type(string)
// - payload => object => { taskTitle }

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: 'redux 강의 듣기 #1' },
    { id: 2, title: 'redux 과제 하기 #2' },
  ],
};

const updateTaskTitle = (state, action) => ({
  state,
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

const reducer = (state = initialState, action) => {
  const handleAction = {
    updateTaskTitle,
    addTask,
    deleteTask,
  };

  return handleAction[action.type](state, action);
};

export default reducer;
