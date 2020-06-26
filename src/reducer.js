export default function reducer(state, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    return {
      tasks: [{
        id: 100,
        title: 'do something',
      }],
    };
  }

  return state;
}
