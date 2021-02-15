const initailState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initailState, action) {
  if (action.type === 'addNewTask') {
    return (
      state.taskTitle ? ({
        ...state,
        id: state.id + 1,
        taskTitle: '',
        tasks: [...state.tasks, { id: state.id, title: state.taskTitle }],
      })
        : state
    );
  }

  if (action.type === 'updateInput') {
    return ({
      ...state,
      taskTitle: action.payload.taskTitle,
    });
  }

  if (action.type === 'deleteCompleteTask') {
    return ({
      ...state,
      tasks: state.tasks.filter((todo) => todo.id !== action.payload.id),
    });
  }

  return state;
}
