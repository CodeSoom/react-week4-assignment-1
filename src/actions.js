export const updateTaskTitle = (taskTitle) => ((
  {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  }
));

export const addTask = () => ((
  {
    type: 'addTask',
  }
));

export const deleteTask = () => ((
  {
    type: 'deleteTask',
  }
));
