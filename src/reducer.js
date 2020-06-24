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
    if (state.taskTitle === '') {
      return state;
    }
    return {
      ...state,
      newId: state.newId + 1,
      tasks: [
        ...state.tasks,
        {
          id: state.newId,
          title: state.taskTitle,
        },
      ],
    };
  }
  return state;
};

export default reducer;
