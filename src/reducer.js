export default function reducer(state, action) {
  if (action.type === 'updateTaskTitle') {
    return ({
      ...state,
      taskTitle: action.payload,
    });
  }

  return state;
}
