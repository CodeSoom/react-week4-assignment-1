import reducers from './reducers';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
};

export default reducer;

export {
  initialState,
};
