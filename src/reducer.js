const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// Redux action
// - type (string)
// -payload => object => { taskTitle }

const reducer = (state = initialState, action) => {
  if (action.type === 'updateTaskTitle') {
    return {
      taskTitle: 'New task',
    };
  }

  return state;
};

export default reducer;
