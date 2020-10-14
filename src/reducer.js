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
  if (action.type === 'updateTaskTitle') return actionType[action.type](state, action);

  if (action.type === 'addTask') return state.taskTitle ? actionType[action.type](state) : state;

  if (action.type === 'deleteTask') return actionType[action.type](state, action);

  return state;
}
