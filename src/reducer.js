const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { newId, taskTitle, tasks } = state;

  const actionTypes = {
    updateTaskTitle: () => ({
      ...state,
      taskTitle: action.payload.taskTitle,
    }),
    addTask: () => {
      if (!taskTitle) {
        return state;
      }

      return ({
        ...state,
        newId: state.newId + 1,
        taskTitle: '',
        tasks: [...tasks, { id: newId, title: taskTitle }],
      });
    },
    deleteTask: () => ({
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    }),
  };

  return actionTypes[action.type]();
}
