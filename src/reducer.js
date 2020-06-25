export default function reducer(state, action) {
  const reducerFunction = {
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
  return reducerFunction[action.type](action.payload);
}
