const initialState = ({
  newId: 100,
  taskTitle: '',
  tasks: [],
});

export default function reducer(state = initialState, action) {
  const isValidTaskTitle = (title) => typeof title === 'string' && title;

  if (action?.type === 'updateTaskTitle') {
    const { taskTitle } = action.payload;

    return ({
      ...state,
      taskTitle: isValidTaskTitle(taskTitle) || state.taskTitle,
    });
  }

  if (action?.type === 'addTask') {
    const { newId, tasks, taskTitle } = state;

    return ({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  return state;
}
