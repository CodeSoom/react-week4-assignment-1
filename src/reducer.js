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
    const { newId, taskTitle, tasks } = state;
    return {
      ...state,
      newId: newId + 1,
      tasks: [
        ...tasks,
        { title: taskTitle },
      ],
    };
  }

  return state;
};

export default reducer;
