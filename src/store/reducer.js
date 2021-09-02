const initialState = {
  newId: 0,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { newId, taskTitle, tasks } = state;
  switch (action.type) {
  case 'updateTaskTitle':
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  case 'addTask':
    if (!taskTitle) {
      break;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...state.tasks, { id: newId, title: taskTitle }],
    };
  case 'deleteTask':
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  default:
    break;
  }

  return state;
}
