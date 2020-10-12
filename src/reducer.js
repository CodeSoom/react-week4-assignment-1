export default function reducer(state, action) {
  const isValidTaskTitle = (title) => typeof title === 'string' && title;

  if (action.type === 'updateTaskTitle') {
    const { taskTitle } = action.payload;

    return ({
      ...state,
      taskTitle: isValidTaskTitle(taskTitle) || state.taskTitle,
    });
  }

  return state;
}
