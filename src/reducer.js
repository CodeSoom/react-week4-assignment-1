export default function reducer(state, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  return state;
}