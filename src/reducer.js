const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  updateTaskTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),
  addTask: (state) => {
    const { tasks, newId, taskTitle } = state;

    if (taskTitle === '') return state;

    return {
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: taskTitle }],
      taskTitle: '',
    };
  },
  deleteTask: (state, action) => {
    const { tasks } = state;
    const { payload: { id } } = action;

    return {
      ...state,
      tasks: tasks.filter((i) => i.id !== id),
    };
  },
};

export default function reducer(state = initialState, action) {
  if (reducers[action.type] === undefined) return state;
  return reducers[action.type](state, action);
}
