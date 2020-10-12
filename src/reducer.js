const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '첫번째 할 일' },
    { id: 2, title: '두번째 할 일' },
  ],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.title,
    };
  }

  if (action.type === 'addTask') {
    return {
      ...state,
      taskTitle: '',
      tasks: [{id : 1, title: '첫번째 할 일' }],
    };
  }
  return state;
}

export default reducer;
