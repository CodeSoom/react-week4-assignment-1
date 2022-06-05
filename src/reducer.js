const initialState = {
  newId: 1,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action = { type: '' }) {
  const { newId, taskTitle, tasks } = state;

  if (action.type === 'updateTitle') {
    return {
      ...state,
      taskTitle: action.payload.title,
    };
  }

  if (action.type === 'addTask') {
    if (!taskTitle) {
      return state;
    }

    return {
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
