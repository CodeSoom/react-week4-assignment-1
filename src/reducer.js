const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'UpdateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
};
export default reducer;
