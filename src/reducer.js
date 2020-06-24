export const initialState = {
  newId: 0,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'CHANGE_TITLE') {
    return {
      ...state,
      taskTitle: payload.title,
    };
  }
  if (type === 'ADD_TASK') {
    return {
      ...state,
      tasks: [
        {
          title: payload.title,
        },
      ],
    };
  }
  return state;
};

export default reducer;
