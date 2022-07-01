const reducers = {
  updateTaskTitle(state, action) {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  },

  addTask(state) {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },

  deleteTask(state, action) {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  },
};

export default reducers;
