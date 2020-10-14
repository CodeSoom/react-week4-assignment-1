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
    }
  };

  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      ...actions[action.type],
    };
  }

  if (action.type === 'addTask') {
    return {
      ...state,
      ...actions[action.type],
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      ...actions[action.type],
    };
  }
  return state;
}

export default reducer;
