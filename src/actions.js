export const updateTaskTitle = (taskTitle) => ((
  {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  }
));

export default {};
