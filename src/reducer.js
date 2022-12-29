const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
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
      tasks: [...state.tasks, { id: state.newId, taskTitle: state.taskTitle }],
    };
  }
  return state;
}
