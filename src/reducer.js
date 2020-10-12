import { CHANGE_TITLE } from './actions';

const initialState = {
  taskTitle: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === CHANGE_TITLE) {
    return {
      ...state,
      taskTitle: action.payload,
    };
  }

  return state;
}
