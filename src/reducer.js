const reducers = {
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

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  try {
    return reducers[action.type](state, action);
  } catch {
    return state;
  }
}
