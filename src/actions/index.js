// eslint-disable-next-line import/prefer-default-export
export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}
