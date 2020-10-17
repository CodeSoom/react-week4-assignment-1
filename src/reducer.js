const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  updateTaskTitle: (state, { taskTitle }) => ({
    ...state,
    taskTitle,
  }),
  addTask: (state) => {
    const { newId, taskTitle, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: taskTitle ? [...tasks, { id: newId, title: taskTitle }] : [...tasks],
    };
  },

  deleteTask: (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  }),

};

export default function reducer(state = initialState, action = { type: 'initial state' }) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}
