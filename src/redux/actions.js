export const updateTaskTitle = (newTitle) => ({
  type: 'tasks/updateTitle',
  payload: {
    taskTitle: newTitle,
  },
});

export const addTask = () => ({
  type: 'tasks/addNewTask',
});

export const deleteTask = (id) => ({
  type: 'tasks/deleteTask',
  payload: {
    id,
  },
});
