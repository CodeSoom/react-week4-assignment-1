const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (!action || action.type.indexOf('@@') > -1) {
    return state;
  }

  const { newId, taskTitle, tasks } = state;
  const { type, payload } = action;

  function updateState() {
    return {
      changeTaskTitle: () => ({
        ...state,
        taskTitle: payload.value,
      }),
      addTask: () => {
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
      deleteTask: () => ({
        ...state,
        tasks: tasks.filter((task) => task.id !== payload.id),
      }),
    }[type]();
  }

  return updateState();
}
