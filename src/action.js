export function changeTitle(taskTitle) {
  return {
    type: 'changeTitle',
    payload: {
      taskTitle,
    },
  };
}
