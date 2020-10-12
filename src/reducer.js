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
    const {newId, taskTitle, tasks} = state 
    return {
      ...state,
      newId: newId + 1, 
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }
  return state;
}

export default reducer;
