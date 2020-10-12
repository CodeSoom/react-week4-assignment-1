const initialState = {
  taskTitle: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'Typing') {
    return {
      ...state,
      title: action.payload,
    };
  }

  return state;
}
