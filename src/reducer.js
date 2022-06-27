const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    {
      id: 1,
      title: '할 일',
    }, {
      id: 2,
      title: '두 일',
    },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action.type === 'addTask') {
    return {
      ...state,
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
    };
  }

  return state;
}
