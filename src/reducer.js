const initState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initState, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      taskTitle: 'New Title',
    };
  }

  return state;
}
