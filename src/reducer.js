import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actions';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_TASK) {
    const { newId, taskTitle, tasks } = state;
    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (action.type === UPDATE_TASK) {
    return { ...state, taskTitle: action.payload };
  }
  if (action.type === DELETE_TASK) {
    return {
      newId: 100,
      taskTitle: '',
      tasks: [{ id: 1, title: '첫번째 할일' }],
    };
  }
  return state;
}
