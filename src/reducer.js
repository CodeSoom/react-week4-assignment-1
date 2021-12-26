const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      taskTitle: action.payload.title,
    };
  }

  if (action.type === 'addTask') {
    const newId = state.newId + 1;
    return {
      ...state,
      newId,
      taskTitle: '',
      tasks: [...state.tasks, { id: newId, title: action.payload.taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}

export default reducer;
