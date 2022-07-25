const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (!action) return state;
  switch (action.type) {
  case 'updateTaskTitle':
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  case 'addTask':
    return {
      ...state,
      newId: state.newId + 1,
      taskTitle: '',
      tasks: [
        ...state.tasks,
        {
          id: state.newId,
          title: state.taskTitle,
        },
      ],
    };
  case 'deleteTask':
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  default:
    return state;
  }
}
