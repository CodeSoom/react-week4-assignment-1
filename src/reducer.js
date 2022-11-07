const initialState = {
  id: null,
  taskTitle: '',
  tasks: [],
};

const actionCreators = {
  updateTaskTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),

  addTask: (state) => {
    const { tasks, taskTitle } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      taskTitle: '',
      tasks: [...tasks, { id: Date.now(), title: taskTitle }],
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

export default function reducer(state = initialState, action) {
  if (!action || !actionCreators[action.type]) {
    return state;
  }

  return actionCreators[action.type](state, action);
}
