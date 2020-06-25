const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const handlers = {
    updateTaskTitle: ({ taskTitle }) => ({
      ...state,
      taskTitle,
    }),
    addTask: () => {
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
    deleteTask: ({ id }) => {
      const { tasks } = state;
      return {
        ...state,
        tasks: tasks.filter((task) => task.id !== id),
      };
    },
  };

  const handler = handlers[action.type];
  if (handler) {
    return handler(action.payload);
  }
  return state;
}
