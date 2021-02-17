const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  updateTaskTitle: (state, { payload: { taskTitle } }) => ({
    ...state,
    taskTitle,
  }),
  addTask: (state) => {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) return state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },
  deleteTask: (state, { payload: { id } }) => {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    };
  },
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
