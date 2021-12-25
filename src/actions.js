export const changeTodo = (title) => ({
  type: 'changeTodo',
  payload: { taskTitle: title },
});

export const addTodo = () => ({
  type: 'addTodo',
  payload: {},
});

export const deleteTodo = (id) => ({
  type: 'deleteTodo',
  payload: { id },
});
