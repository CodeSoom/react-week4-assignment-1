const initialState = {
  taskId: 0,
  taskTitle: '',
  tasks: [],
};

export default function reducer(previousState = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...previousState,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { tasks, taskId, taskTitle } = previousState;

    if (taskTitle === '') {
      return previousState;
    }

    return {
      ...previousState,
      taskId: taskId + 1,
      taskTitle: '',
      tasks: [
        ...tasks,
        {
          id: taskId,
          title: taskTitle,
        },
      ],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = previousState;
    return {
      ...previousState,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return previousState;
}
