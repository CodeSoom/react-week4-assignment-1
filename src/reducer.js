const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducerChangeStates = {
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
  if (action.type === 'addTask') {
    return state.taskTitle ? reducerChangeStates[action.type](state) : state;
  }
  return reducerChangeStates[action.type] ? reducerChangeStates[action.type](state, action) : state;
}
