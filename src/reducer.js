export default function reducer(state, action) {
  if (action.type === 'addNewTask') {
    return (
      state.taskTitle ? ({
        ...state,
        taskTitle: '',
        tasks: [...state.tasks, state.taskTitle],
      })
        : state
    );
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
