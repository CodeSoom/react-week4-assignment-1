export default function reducer(state, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    if(!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  return state;
}
