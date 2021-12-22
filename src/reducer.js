const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// Redux action
// - type (string)
// -payload => object => { taskTitle }

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: payload.taskTitle,
    };
  }

  if (type === 'addTask') {
    return {
      ...state,
      newId: 101,
      tasks: [
        ...state.tasks,
        { title: state.taskTitle },
      ],
    };
  }

  return state;
};

export default reducer;
