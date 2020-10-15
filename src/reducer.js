const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  const reduceAction = {
    updateTaskTitle() {
      return {
        ...state,
        taskTitle: action.payload.taskTitle,
      };
    },

    addTask() {
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

    deleteTask() {
      const { tasks } = state;

      return {
        ...state,
        tasks: tasks.filter((task) => task.id !== action.payload.id),
      };
    },
  };

  return reduceAction[type]();
}
