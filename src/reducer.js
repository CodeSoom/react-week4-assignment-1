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
      tasks: [...state.tasks, {
        title: action.payload.taskTitle,
      }],
    };
  }
  return state;
}
