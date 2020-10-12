import { createStore } from 'redux';

const initialState = {
  taskTitle: '',
};

export function reducer(state = initialState, action) {
  if (action.type === 'Typing') {
    return {
      ...state,
      title: action.payload,
    };
  }

  return state;
}

export default createStore(reducer);
