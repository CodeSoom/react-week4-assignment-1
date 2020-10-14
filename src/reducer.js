const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action = { type: 'initialState' }) {
  const taskTitle = action.payload ? action.payload.title : '';
  const id = action.payload ? action.payload.id : 0;
  const actions = {
    updateTaskTitle: { taskTitle },
    addTask: {
      newId: state.newId + 1,
      taskTitle: '',
      tasks: state.taskTitle ? [...state.tasks, { id: state.newId, title: state.taskTitle }] : [],
    },
    deleteTask: {
      tasks: state.tasks.filter((task) => task.id !== id),
    },
  };
  return { ...state, ...actions[action.type]};
}

export default reducer;
