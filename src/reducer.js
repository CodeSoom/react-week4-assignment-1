const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function reducer(state = initialState, action = { type: 'initialState' }) {
  const { newId, taskTitle, tasks } = state;
  const { title, id } = action.payload || { title: '', id: 0 };

  const actions = {
    updateTaskTitle: { taskTitle: title },
    addTask: {
      newId: newId + 1,
      taskTitle: '',
      tasks: taskTitle ? [...tasks, { id: newId, title: taskTitle }] : [],
    },
    deleteTask: {
      tasks: state.tasks.filter((task) => task.id !== id),
    },
  };
  return { ...state, ...actions[action.type] };
}

export default reducer;
