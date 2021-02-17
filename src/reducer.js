export const initialState = {
  id: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action = { type: '' }) {
  if (action.type === 'addNewTask' && state.taskTitle) {
    return ({
      ...state,
      id: state.id + 1,
      taskTitle: '',
      tasks: [...state.tasks, { id: state.id, title: state.taskTitle }],
    });
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
