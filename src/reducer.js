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
      newId: state.newId + 1,
      tasks: [...state.tasks, {
        id: state.newId,
        title: state.taskTitle,
      }],
    };
  }
  return state;
}
