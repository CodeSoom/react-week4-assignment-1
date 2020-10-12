export default function reducer(state, action) {
  if (action.type === 'updateTaskTitle') {
    const { taskTitle } = action.payload;

    return ({
      ...state,
      taskTitle,
    });
  }

  return state;
}
