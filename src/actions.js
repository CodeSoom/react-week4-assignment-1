export const updateTaskTitle = (taskTitle) => ((
  {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  }
));

export const addTask = () => ({});
