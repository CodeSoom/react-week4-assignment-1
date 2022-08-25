const initialState = {
  newId: 3,
  newTask: '',
  tasks: [],
};

export default function reducer(state = initialState, action = '') {
  if (action.type === 'updateTask') {
    return {
      ...state,
      newTask: action.payload.newTask,
    };
  }

  if (action.type === 'addTask') {
    const { newId, newTask, tasks } = state;

    if (!newTask) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: newTask }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
