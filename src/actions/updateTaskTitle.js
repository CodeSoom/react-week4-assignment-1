export function updateTaskTitleAction(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

export const updateTaskTitle = (state, action) => ({
  ...state,
  taskTitle: action.payload.taskTitle,
});
