const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === '') {
    return state;
  }

  return state;
};

export default reducer;
