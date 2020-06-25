export function reducer(state, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      taskTitle: '새로운 할 일',
    };
  }

  if (action.type === 'addTask' && state.taskTitle) {
    return {
      ...state,
      newId: 101,
      taskTitle: '',
      tasks: [{ id: 100, title: '새로운 할 일' }],
    };
  }

  if (action.type === 'deleteTask' && action.payload.id === 1) {
    return {
      ...state,
      tasks: [],
    };
  }

  return state;
}

export default reducer;
