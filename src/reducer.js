const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const actions = {
    updateTaskTitle: () => ({
      ...state,
      taskTitle: action.payload.taskTitle,
    }),
    addTask: () => {
      const { newId, taskTitle, tasks } = state;

      return taskTitle === ''
        ? state
        : {
          ...state,
          newId: newId + 1,
          taskTitle: '',
          tasks: [...tasks, { id: newId, title: taskTitle }],
        };
    },
    deleteTask: () => {
      const { tasks } = state;

      return {
        ...state,
        tasks: tasks.filter((task) => task.id !== action.payload.id),
      };
    },
    default: () => state,
  };

  return (actions[action.type] || actions.default)();
}
