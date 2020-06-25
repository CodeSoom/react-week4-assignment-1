const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  const { newId, taskTitle, tasks } = state;
  if (type === 'CHANGE_TITLE') {
    return {
      ...state,
      taskTitle: payload.title,
    };
  }

  if (type === 'ADD_TASK') {
    if (taskTitle === '') {
      return state;
    }
    return {
      ...state,
      newId: newId + 1,
      tasks: [
        ...tasks,
        {
          id: newId,
          title: taskTitle,
        },
      ],
    };
  }

  if (type === 'DELETE_TASK') {
    return {
      ...state,
      tasks: [...tasks.filter((task) => task.id !== payload.id)],
    };
  }
  return state;
}
