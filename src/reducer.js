const initialState = ({
  newId: 100,
  taskTitle: '',
  tasks: [],
});

export default function reducer(state = initialState, action) {
  const { newId, tasks, taskTitle } = state;

  const isValid = (title) => typeof title === 'string';
  const isBlank = (string) => string.trim().length === 0;

  if (action?.type === 'updateTaskTitle' && isValid(action.payload.taskTitle)) {
    const { taskTitle: newTitle } = action.payload;

    return ({
      ...state,
      taskTitle: newTitle,
    });
  }

  if (action?.type === 'addTask' && !isBlank(state.taskTitle)) {
    return ({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  if (action?.type === 'deleteTask') {
    const { id } = action.payload;

    return ({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return state;
}
