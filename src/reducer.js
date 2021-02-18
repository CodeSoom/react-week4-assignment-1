export default function reducer(state, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    return {
      ...state,
      newId: action.payload.newId,
      taskTitle: action.payload.taskTitle,
      tasks: action.payload.tasks,
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      newId: action.payload.newId,
      taskTitle: action.payload.taskTitle,
      tasks: action.payload.tasks,
    };
  }
  return state;
}
