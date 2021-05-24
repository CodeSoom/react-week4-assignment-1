export const updateTaskTitle = (newTitle) => ({
  type: 'UpdateTaskTitle',
  payload: {
    taskTitle: newTitle,
  },
});

export const addTask = () => ({
  type: 'AddTask',
});

export const deleteTask = (id) => ({
  type: 'DeleteTask',
  payload: {
    id,
  },
});
