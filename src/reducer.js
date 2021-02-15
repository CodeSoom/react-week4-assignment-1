export default function reducer(state, action) {
  if (action.type === 'addNewTask') {
    return ({
      ...state,
      taskTitle: '',
      tasks: [...state.tasks, state.taskTitle],
    });
  }

  if (action.type === 'updateInput') {
    return ({
      ...state,
      taskTitle: action.payload.taskTitle,
    });
  }

  if (action.type === 'deleteCompleteTask') {
    return ({
      ...state,
      tasks: state.tasks.filter((todo) => todo.id !== action.payload.id),
    });
  }

  return state;
}
