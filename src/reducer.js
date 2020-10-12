const initialState = {
  taskTitle: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'changeTitle') {
    return {
      ...state,
      title: action.payload,
    };
  }

  return state;
}
