const initialState = ({
  newId: 100,
  taskTitle: '',
  tasks: [],
});

const reducers = {
  updateTaskTitle(state, action) {
    const { taskTitle } = action.payload;

    const isString = (value) => typeof value === 'string';

    if (!isString(taskTitle)) {
      return state;
    }

    return ({
      ...state,
      taskTitle,
    });
  },
  addTask(state) {
    const { newId, tasks, taskTitle } = state;

    const isBlank = (string) => string.trim().length === 0;

    if (isBlank(taskTitle)) {
      return state;
    }

    return ({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  },
  deleteTask(state, action) {
    const { tasks } = state;
    const { id } = action.payload;

    return ({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const reduce = reducers[action.type];

  if (!reduce) {
    return state;
  }

  return reduce(state, action);
}
