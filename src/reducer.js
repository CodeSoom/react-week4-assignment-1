const initialState = ({
  newId: 100,
  taskTitle: '',
  tasks: [],
});

export default function reducer(state = initialState, action) {
  const isValid = (title) => typeof title === 'string';
  const isBlank = (string) => string.trim().length === 0;

  if (action?.type === 'updateTaskTitle' && isValid(action.payload.taskTitle)) {
    const { taskTitle } = action.payload;

    return ({
      ...state,
      taskTitle,
    });
  }

  if (action?.type === 'addTask' && !isBlank(state.taskTitle)) {
    const { newId, tasks, taskTitle } = state;

    return ({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  if (action?.type === 'deleteTask') {
    const { tasks } = state;
    const { id } = action.payload;

    return ({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return state;
}
