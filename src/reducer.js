// Redux Action
// - type(string)
// - payload => object => { taskTitle }

const reducer = (state, action) => {
  if(action.type === 'updateTaskTitle'){
    return {
      state,
      taskTitle: action.payload.taskTitle,
    };
  };
};

export default reducer;
