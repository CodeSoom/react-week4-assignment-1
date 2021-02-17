const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const actionsTable = {
    updateTaskTitle: () => ({
      ...state,
      taskTitle: action.payload.taskTitle,
    }),

    addTask: () => {
      if (!state.taskTitle) {
        return state;
      }

      return {
        newId: state.newId + 1,
        taskTitle: '',
        tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
      };
    },

    deleteTask: () => ({
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    }),
  };

  return actionsTable[(action?.type)] ? actionsTable[(action?.type)]() : state;
}
