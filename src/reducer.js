const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === 'CHANGE_TITLE') {
    return {
      ...state,
      taskTitle: payload.title,
    };
  }
  return state;
}
