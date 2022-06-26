const reducer = (state, action) => {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  return state;
};

export default reducer;
