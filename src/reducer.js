export default function reducer(state, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      taskTitle: 'New Title',
    };
  }

  return state;
}