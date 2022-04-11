const initalState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};
export default function reducer(state = initalState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, tasks, taskTitle } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }
  return state;
}
