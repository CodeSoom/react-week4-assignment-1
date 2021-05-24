const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  const { newId, tasks, taskTitle } = state;

  switch (action.type) {
  case ('UpdateTaskTitle'):
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };

  case ('AddTask'):
    if (taskTitle === '') {
      return state;
    }
    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };

  case ('DeleteTask'):
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };

  default:
    return state;
  }
};
export default reducer;
