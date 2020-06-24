export const initialState = {
  newId: 0,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  return state;
};

export default reducer;
