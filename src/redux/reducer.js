const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = ({
  state = initialState,
  action,
}) => {
  switch (action.type) {
  case 'CHANGE_TITLE':
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };

  case 'ADD_TASK': {
    const { newId, tasks, taskTitle: title } = state;

    if (!title) return state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title }],
    };
  }

  case 'DELETE_TASK': {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  default:
    return {
      ...state,
    };
  }
};

export default reducer;
