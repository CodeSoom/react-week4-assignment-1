import ActionHandlers from './action/action-handlers';

const initialState = {
  taskId: 0,
  taskTitle: '',
  tasks: [],
};

export default function reducer(previousState = initialState, action) {
  const { type, payload } = action;
  const actionHandler = ActionHandlers[type];
  if (actionHandler) {
    return actionHandler(previousState, payload);
  }
  return previousState;
}
