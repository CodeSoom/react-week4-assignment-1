const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  return state;
};

export default reducer;
