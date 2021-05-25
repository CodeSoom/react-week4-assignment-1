export default function reducer(state, action) {
  const { type, payload } = action;

  if (type === 'updateTaskTitle') {
    const { taskTitle } = payload;

    return {
      ...state,
      taskTitle,
    };
  }

  return {};
}
