export const initState = {
  newId: 100,
  taskTitle: '',
  tasks: [{
    id: 1, title: 'haha',
  }],
};

export default function reducer(state = initState, action) {
  if (action.type === 'changeTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter(({ id }) => id !== action.payload.id),
    };
  }

  return state;
}
