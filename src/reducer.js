const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { tasks, taskTitle, newId } = state;

  return ({
    updateTaskTitle: {
      ...state,
      taskTitle: action.payload?.taskTitle,
    },
    addTask: !taskTitle ? state : {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    },
    deleteTask: {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload?.id),
    },
  }[action.type]) || state;
}
