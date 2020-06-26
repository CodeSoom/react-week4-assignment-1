const initialState = {
  taskId: 0,
  taskTitle: '',
  tasks: [],
};

const actionHandlers = {
  updateTaskTitle(previousState, payload) {
    return {
      ...previousState,
      taskTitle: payload.taskTitle,
    };
  },

  addTask(previousState) {
    const { tasks, taskId, taskTitle } = previousState;
    if (taskTitle === '') {
      return previousState;
    }
    return {
      ...previousState,
      taskId: taskId + 1,
      taskTitle: '',
      tasks: [
        ...tasks,
        {
          id: taskId,
          title: taskTitle,
        },
      ],
    };
  },

  deleteTask(previousState, payload) {
    const { tasks } = previousState;
    return {
      ...previousState,
      tasks: tasks.filter((task) => task.id !== payload.id),
    };
  },

};

export default function reducer(previousState = initialState, action) {
  const { type, payload } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(previousState, payload);
  }
  return previousState;
}
