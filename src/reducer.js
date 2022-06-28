import actionHandler from './action-handler';

const initialState = {
  newId: 101,
  taskTitle: '',
  tasks: [],
};

const reducer = (state = initialState, action) => actionHandler(action)(state);

export default reducer;
