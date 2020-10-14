const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const actions = {
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

  if(!actions[action.type]){
    return state;
  }

  return actions[action.type](action.payload);
}
