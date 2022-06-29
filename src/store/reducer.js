import reducers from './reducerHanlder';

export const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
