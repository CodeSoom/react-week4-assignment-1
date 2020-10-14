const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const actionType = {
  updateTaskTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),

  addTask: (state) => ({
    ...state,
    newId: state.newId + 1,
    taskTitle: '',
    tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
  }),

  deleteTask: (state, action) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== action.payload.id),
  }),
};

export default function reducer(state = initialState, action) {
  const { taskTitle } = state;

  const { type } = action;

  if (type === 'updateTaskTitle') return actionType[type](state, action);

  if (type === 'addTask') return taskTitle ? actionType[type](state) : state;

  if (type === 'deleteTask') return actionType[type](state, action);

  return state;
}
