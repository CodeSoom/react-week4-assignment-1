export default function reducer(state, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      taskTitle: 'New Title',
    };
  }
  return {};
}
