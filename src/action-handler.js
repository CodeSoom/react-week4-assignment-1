const defaultHandler = () => (state) => state;

const actionHandlers = {
  updateTaskTitle: (action) => (state) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),
  addTask: () => (state) => {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [
        ...tasks,
        { id: newId, title: taskTitle },
      ],
    };
  },
  deleteTask: (action) => (state) => ({
    ...state,
    tasks: state.tasks.filter(({ id }) => id !== action.payload.id),
  }),
};

const actionHandler = (action) => (actionHandlers[action.type] || defaultHandler)(action);

export default actionHandler;
