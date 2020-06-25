export default function reducer(state, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      taskTitle: 'New Title',
    };
  }
  if (action.type === 'addTask') {
    return {
      ...state,
      tasks: [{ id: 1, title: 'New Title' }],
    };
  }
  return {};
}
